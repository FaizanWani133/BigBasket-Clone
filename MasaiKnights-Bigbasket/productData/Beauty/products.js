var beautyArr = allProducts.beautyArr

document.querySelector("#productValue").innerText = " (" + beautyArr.length + ")";

var brandFilter1 = document.querySelector("#brand-filter1");
var brandFilter2 = document.querySelector("#brand-filter2");
var brandFilter3 = document.querySelector("#brand-filter3");
var brandFilter4 = document.querySelector("#brand-filter4");
var brandFilter5 = document.querySelector("#brand-filter5");
var brandFilter6 = document.querySelector("#brand-filter6");
var brandFilter7 = document.querySelector("#brand-filter7");
var brandFilter8 = document.querySelector("#brand-filter8");
var brandFilter9 = document.querySelector("#brand-filter9");
var brandFilter10 = document.querySelector("#brand-filter10");
var brandFilter11 = document.querySelector("#brand-filter11");
var brandFilter12 = document.querySelector("#brand-filter12");
var brandFilter13 = document.querySelector("#brand-filter13");
var brandFilter14 = document.querySelector("#brand-filter14");
var brandFilter15 = document.querySelector("#brand-filter15");
var brandFilter16 = document.querySelector("#brand-filter16");
var brandFilter17 = document.querySelector("#brand-filter17");


var checkboxArr = document
    .querySelectorAll(".checkbox")
var newArr = [];
for (var i = 0; i < checkboxArr.length; i++) {

    checkboxArr[i].addEventListener("click", function () {
        newArr = [];


        if (brandFilter1.checked === true) {
            newArr = beautyArr.filter(function (elem) {
                return elem.brand == "Dettol";
            });

            //   displayProducts(newArr);
        }
        if (brandFilter2.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return elem.brand == "Sensodyne";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter3.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return elem.brand == "Dabur Red";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter4.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return elem.brand == "Pears";
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter5.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return elem.Quantity.includes("tubs");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter6.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return elem.Quantity.includes("pouch");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter7.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return elem.Quantity.includes("can");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter8.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return elem.Quantity.includes("tin");
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter9.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return parseInt(elem.price) <= 20;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter10.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return parseInt(elem.price) >= 20 && parseInt(elem.price) <= 50;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter11.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return parseInt(elem.price) > 50 && parseInt(elem.price) <= 100;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter12.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return parseInt(elem.price) > 100 && parseInt(elem.price) <= 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter13.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return parseInt(elem.price) > 200;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter14.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 5;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter15.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 5 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 10;;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter16.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 10 && (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 <= 15;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (brandFilter17.checked === true) {
            var tempArr = beautyArr.filter(function (elem) {
                return (+elem.strikedOdprice - +elem.price) / +elem.strikedOdprice * 100 > 15;
            });
            for (var i = 0; i < tempArr.length; i++) {
                newArr.push(tempArr[i]);
            }
            //   displayProducts(newArr);
        }
        if (
            brandFilter1.checked == false &&
            brandFilter2.checked == false &&
            brandFilter3.checked == false &&
            brandFilter4.checked == false &&
            brandFilter5.checked == false &&
            brandFilter6.checked == false &&
            brandFilter7.checked == false &&
            brandFilter8.checked == false &&
            brandFilter9.checked == false &&
            brandFilter10.checked == false &&
            brandFilter11.checked == false &&
            brandFilter12.checked == false &&
            brandFilter13.checked == false &&
            brandFilter14.checked == false &&
            brandFilter15.checked == false &&
            brandFilter16.checked == false &&
            brandFilter17.checked == false
        ) {
            displayProducts(beautyArr);
        }
        else {
            document.querySelector("#productValue").innerText = " (" + newArr.length + ")";
            displayProducts(newArr)
        }
    });
}
;
function priceSort() {
    if (newArr.length == 0) {
        newArr = beautyArr
    }
    var selected = document.getElementById("sort-bar").value;
    if (selected == "lowToHigh") {

        newArr.sort(function (a, b) {

            return a.price - b.price;

        })
    }
    else if (selected == "highToLow") {
        newArr.sort(function (a, b) {

            return b.price - a.price;
        })
    }

    else if (selected == "A-Z") {
        console.log("yes")
        newArr.sort(function (a, b) {

            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        })
    }
    else if (selected == "Z-A") {
        newArr.sort(function (a, b) {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        })
    }

    document.querySelector("#productValue").innerText = " (" + newArr.length + ")";
    displayProducts(newArr)
}
displayProducts(beautyArr)

