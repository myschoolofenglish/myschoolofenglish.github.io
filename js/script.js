onload=function(){
    if (document.getElementsByClassName == undefined) {
        document.getElementsByClassName = function(className)
        {
            var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
            var allElements = document.getElementsByTagName("*");
            var results = [];

            var element;
            for (var i = 0; (element = allElements[i]) != null; i++) {
                var elementClass = element.className;
                if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
                    results.push(element);
            }

            return results;
        }
    }
}

var emails = document.getElementsByClassName("email");
for ( i = 0 ; i < emails.length ; i++ ) {
    var email = emails[i].innerHTML;
    email = email.replace(" [at] ", "&#64;");
    emails[i].innerHTML = "<a href=\"mailto:" + email + "\">" + email + "</a>";
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("school-student");
    for (i = 0; i < x.length; i++) {
        x[i].className = "school-student carousel-inactive";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex - 1].className = "school-student carousel-active";
    setTimeout(carousel, 5000);
}