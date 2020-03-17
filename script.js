                $(document).ready(function(){

                    function animationDivAppear(stringSelector) {
                        $(stringSelector).click(faddingIn);
                    }

                    animationDivAppear("#menuBarBtn0");
                    animationDivAppear("#menuBarBtn1");
                    animationDivAppear("#menuBarBtn2");
                    animationDivAppear("#menuBarBtn3");
                    animationDivAppear("#menuBarBtn4");

                $("#exitAnimationDiv").click(function(){
                    $("#animationDiv").fadeOut(1000);
                });

                    function faddingIn() {
                        $("#animationDiv").fadeIn(1000);
                    }

                });



