import 'dart:ui';

import 'package:flutter/material.dart';
import 'dart:async';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MaterialApp(
    home: AppCoffeRnd(),
  ));
}

// Create a stateful widget
class AppCoffeRnd extends StatefulWidget {
  @override
  AppCoffeRndState createState() => AppCoffeRndState();
}

// Create the state for our stateful widget
class AppCoffeRndState extends State<AppCoffeRnd> {
  final String url = "https://api.randasyf.com/dart";
  List data;

  Future<String> getJSONData() async {
    var response = await http
        .get(Uri.encodeFull(url), headers: {"Accept": "application/json"});

    print(response.body);

    setState(() {
      var dataConvertedToJSON = json.decode(response.body);
      data = dataConvertedToJSON['result'];
      print(data);
    });

    return "Successfull";
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Coffe Style Guidline"),
        ),
        body: Container(
          child: ListView.builder(
              itemCount: data == null ? 0 : data.length,
              itemBuilder: (BuildContext context, int index) {
                return Padding(
                  padding: EdgeInsets.symmetric(vertical: 4, horizontal: 8),
                  child: Card(
                    shape: RoundedRectangleBorder(
                      side: BorderSide(color: Colors.white70, width: 1),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    clipBehavior: Clip.antiAlias,
                    elevation: 5,
                    child: Row(
                      children: <Widget>[
                        Expanded(
                          flex: 3,
                          child: Image.network(data[index]['image']),
                        ),
                        Expanded(
                          flex: 4,
                          child: Padding(
                            padding: EdgeInsets.all(16.0),
                            child: Text(data[index]['title']),
                          ),
                        ),
                        Expanded(
                            flex: 3,
                            child: MaterialButton(
                              color: Colors.blueAccent,
                              child: Text('Detail'),
                              onPressed: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => DetailScreen(),
                                    settings: RouteSettings(
                                      arguments: data[index],
                                    ),
                                  ),
                                );
                              },
                            )),
                      ],
                    ),
                  ),
                );
              }),
        ));
  }

  @override
  void initState() {
    super.initState();

    // Call the getJSONData() method when the app initializes
    this.getJSONData();
  }
}

class DetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var data = ModalRoute.of(context).settings.arguments;
    Map<String, dynamic> datad = data;
    print(datad);
    // Use the Todo to create the UI.
    return Scaffold(
      appBar: AppBar(
        title: Text(datad['title']),
      ),
      body: Padding(
        padding: EdgeInsets.all(8.0),
        child: Card(
            elevation: 4,
            child: Padding(
              padding: EdgeInsets.all(8),
              child: Column(
                children: <Widget>[
                  Image.network(datad['image']),
                  Padding(
                    padding: EdgeInsets.all(12),
                    child: Text(datad['description']),
                  ),
                  Padding(
                    padding: EdgeInsets.all(12),
                    child: Column(
                      children: <Widget>[
                        Text('recipe',style: TextStyle(fontWeight:FontWeight.bold),),
                        Text(datad['recipe'])
                      ],
                    ),
                  )
                ],
              ),
            )),
      ),
    );
  }
}
