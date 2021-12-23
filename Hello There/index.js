$(document).ready(()=> {
    $(".container").on("mouseover",".box1",function() {
        $(this).children(".cover").css({
            transform: "translateY(50px) translateX(-50px)",
            width: "100px",
            height: "100px",
            borderRadius:"50%"
        })
        
    
       
    })
    $(".container").on("mouseleave",".box1",function() {
        $(this).children(".cover").css({
            transform: "translateY(0px) translateX(0px)",
            width: "300px",
            height: "200px",
            borderRadius:"0%"
        })
    
       
    })
})