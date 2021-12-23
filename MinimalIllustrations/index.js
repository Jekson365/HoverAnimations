$(document).ready(()=> {
    $(".container").on("mouseover",".myimage",function(){
        $(this).siblings(".content").css({height:"200px"},100)
        $(this).parent(".container").css({boxShadow:"0px 0px 60px 0.1px #303030"})
    })
    $(".container").on("mouseleave",".myimage",function(){
        $(this).siblings(".content").css({height:"0px"})
        $(this).parent(".container").css({boxShadow:"0px 0px 0px 0px #fff"})
    })
    
})