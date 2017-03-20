str_final = ""
var mass_item = $('.mass_item')
for (var i=1;i<mass_item.length;i++){
	// skip the 1st mass_item
	mass_item_i = mass_item[i]
	mass_content_s = mass_item_i.children
	mass_content_0 = mass_content_s[0]	//图文区
	if ( ! mass_content_0.children[0].innerText.startsWith('[图片]')){
		//暂时不统计图片
		if (mass_content_0.children[0].innerText.startsWith('多图文') ){
			//多图文
			multiple_msg = mass_content_0.children[1].children[0].children
		}
		else if(mass_content_0.children[0].children.length > 0){
			//单图文
			multiple_msg = mass_content_0.children[0].children[0].children
			//multiple_msg = [multiple_msg]
		}
	 
		// 日期
		mass_content_2 = mass_content_s[2]	//日期区
		msg_time = mass_content_2.children[0].innerText

		// multiple_msg: list, class = appmsgSendedItem multiple_appmsg 
		for (var j=0;j<multiple_msg.length;j++){
			// 多图文
			msg = multiple_msg[j]
			msg_title = msg.children[0].innerText
			if ( ! msg_title.startsWith('已删除')){
				//只考虑未删除的			
				if (msg.children[1].children.length > 0){
					//无“原创”
					msg_read_count = msg.children[1].children[0].children[0].innerText.split(' ')[1] // 阅读
					msg_praise_count = msg.children[1].children[0].children[1].innerText.split(' ')[1]	//点赞
					//msg_comment_count = msg.children[1].children[1].innerText.split(' ')[1]	//留言
					msg_origin = ''
				}
				else{
					//有“原创”
					msg_read_count = msg.children[2].children[0].children[0].innerText.split(' ')[1] // 阅读
					msg_praise_count = msg.children[2].children[0].children[1].innerText.split(' ')[1]	//点赞
					//msg_comment_count = msg.children[2].children[1].innerText.split(' ')[1]	//留言
					msg_origin = '原创'

				}
				str_final += msg_title + '\t' + msg_read_count + '\t' + msg_praise_count + '\t' + msg_time + '\t' + msg_origin + '\n'
			}
		}
	}
	console.log(i)
}
copy(str_final)

/*
var element_titles = $('.title') 
var element_titles = $(".title:contains('图文')") 
var element_reads = $(".desc span:contains('阅读')")
var element_dates = $('.mass_time')

var num = element_titles.length
var str_final = ""
for (var i=0; i<num; i++ ){
	str_final += element_titles[i].innerText + '\t' + element_reads[i].innerText + '\n';//'\t' + element_dates[i].innerText + '\n';
}
var element_url = $('.title_wrp')
var num = element_url.length
var str_url = ""
for (var i=0; i<num; i++ ){
	str_url += element_url[i] + '\n'
}
copy()

*/