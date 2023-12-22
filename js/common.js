
    
    /**
     * KeyBoard Event List
     */
    const event = ["focus", "blur", "keydown", "keypress", "keyup", "input", "change", "paste", "copy"];
    let phoneNumberInput;


    /**
     * AddEvent PhoneNumber Event
     */
    document.addEventListener("DOMContentLoaded", function() {
        autoHipen.event();
    });

    /**
     * AutoHipen Function
     */
    let autoHipen = {
        event : () => {
            document.addEventListener(event, function() {
                phoneNumberInput = document.querySelectorAll("");
            })
        }
        , test : () => {
            console.log("hi")
        }
    }

    function test() {

    }

    class test {
        
    }

