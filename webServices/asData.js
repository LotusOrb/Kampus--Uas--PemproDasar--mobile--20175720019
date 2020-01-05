const dat =
    [
        {
            id: "1",
            title: "Espresso (Short Black)",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "The espresso (aka “short black”) is the foundation and the most important part to every espresso based drink. So much so that we’ve written a guide on how to make the perfect espresso shot.",
            recipe: "1 Shot of espresso in an espresso cup"
        },
        {
            id: "2",
            title: "Double Espresso (Doppio)",
            image: "https://api.randasyf.com/public/double-espresso.jpg",
            description: "A double espresso (aka “Doppio”) is just that, two espresso shots in one cup. Therefore a double espresso consists of:",
            recipe: "2 shots of espresso in an espresso cup"
        },
        {
            id: "3",
            title: "Short Macchiato",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "A short macchiato is similar to an espresso but with a dollop of steamed milk and foam to mellow the harsh taste of an espresso. You will find that baristas in different countries make short macchiatos differently. However the traditional way of making a short",
            recipe: "1 Shot of espresso in a short glass or espresso cup• A dollop of steamed milk and foam placed on top of the espresso"
        },
        {
            id: "4",
            title: "Long Macchiato",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "A double espresso (aka “Doppio”) is just that, two espresso shots in one cup. Therefore a double espresso consists of:",
            recipe: "2 shots of espresso in an espresso cup"
        },
        {
            id: "5",
            title: "Ristretto",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "The espresso (aka “short black”) is the foundation and the most important part to every espresso based drink. So much so that we’ve written a guide on how to make the perfect espresso shot.",
            recipe: "1 Shot of espresso in an espresso cup"
        },
        {
            id: "6",
            title: "Long Black (Americano)",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "A double espresso (aka “Doppio”) is just that, two espresso shots in one cup. Therefore a double espresso consists of:",
            recipe: "2 shots of espresso in an espresso cup"
        },
        {
            id: "7",
            title: "Café Latte",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "The espresso (aka “short black”) is the foundation and the most important part to every espresso based drink. So much so that we’ve written a guide on how to make the perfect espresso shot.",
            recipe: "1 Shot of espresso in an espresso cup"
        },
        {
            id: "8",
            title: "Cappuccino",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "A double espresso (aka “Doppio”) is just that, two espresso shots in one cup. Therefore a double espresso consists of:",
            recipe: "2 shots of espresso in an espresso cup"
        },
        {
            id: "9",
            title: "Flat White",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "The espresso (aka “short black”) is the foundation and the most important part to every espresso based drink. So much so that we’ve written a guide on how to make the perfect espresso shot.",
            recipe: "1 Shot of espresso in an espresso cup"
        },
        {
            id: "10",
            title: "Piccolo Latte",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "A double espresso (aka “Doppio”) is just that, two espresso shots in one cup. Therefore a double espresso consists of:",
            recipe: "2 shots of espresso in an espresso cup"
        },
        {
            id: "11",
            title: "Mocha",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "The espresso (aka “short black”) is the foundation and the most important part to every espresso based drink. So much so that we’ve written a guide on how to make the perfect espresso shot.",
            recipe: "1 Shot of espresso in an espresso cup"
        },
        {
            id: "12",
            title: "Affogato",
            image: "https://api.randasyf.com/public/432856237_da68d53578_z.jpg",
            description: "A double espresso (aka “Doppio”) is just that, two espresso shots in one cup. Therefore a double espresso consists of:",
            recipe: "2 shots of espresso in an espresso cup"
        },
    ]



exports.allData = () => {
    return dat
}

exports.oneData = (id) => {
    const moment = [...dat];
    var retVal;

    moment.map(result => {
        if (id == result.id) {
            retVal = result;
        }
    })

    return retVal
}
