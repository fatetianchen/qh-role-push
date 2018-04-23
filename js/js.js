		$('.role-img>li').click(function(){
			var i = $(this).index();
			
				console.log(i);
				$.ajax({
						type: "get",
						url:"ajax.json",
						async: true,
						beforeSend:function(){
							$(".Modal-z").show();
						},
						success: function(data) {
							console.log(data.features[i]);
						$('#myModal').modal('show')
						$('.modal-body').empty();
						$('.nameimg').css({'background':"url(images/"+data.features[i].Image+") no-repeat center center","background-size":"cover"});
						$('.modal-body').append(data.features[i].Tile);
						$(".Modal-z").hide();
					}
						});
		})
		$("img.lazy").lazyload({
		  placeholder : "img/logo.gif", //用图片提前占位
		    // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
		  effect: "fadeIn", // 载入使用何种效果
		    // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
		  threshold: 50, // 提前开始加载
		    // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
		  event: 'click',  // 事件触发时才加载
		    // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
		  container: $("#container"),  // 对某容器中的图片实现效果
		    // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
		  failurelimit : 10 // 图片排序混乱时
		});

