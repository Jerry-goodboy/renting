function drawImgBlock (img, price, house) {
	// var estateArr = ['和畅园','美林园','天和园','芦花庄园','锦庐园','南苑','兰苑','荣馨园','首玺园','尚苑','建设公寓','世茂生态城','金航湾','蓝领公寓','宝龙欧洲城','碧桂园•滨海城','力高•阳光海岸','新新家园','季景园','鲲玉园','鲲贝园','景杉园','香堤苑','鲲玺园','红树湾花园','芙蓉北苑','雅境园','芙蓉南苑','家和园','悦馨苑','兰景园','美韵园','璟苑','新颐园','依水园','首创康桥郡','澜水苑','煦园',"颐湖居","慧水苑","雅馨园"];
	// var showItemArr = ["小区名称", "开发商", "上市套数", "成交套数", "平均价格", "入住率"];
	
}

function chart1 () {
	var chart1 = echarts.init(document.getElementById('chart1'));

	var chart1Option = {
    title : {
        text: '房屋类型销售率（%）',
        subtext: ''
    },
    legend: {
        data:['房屋类型销售率'],
        x: 'right'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            splitLine: {
            	show: false
            },
            axisLabel:{
            	rotate:-25
            },
            data : ['(1-4层）别墅','（5-8层）洋房','9-11层（小高层）','12-18层（小高层）','18层以上（高层）']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true,
            axisLabel: {
                formatter: '{value} '
            },
            splitLine: {
            	show: true,
            	lineStyle: {
            		color: '#aaa',
				    width: 1,
				    type: 'dashed'
            	}
            }
        }
    ],
    series : [
        {
            name:'房屋类型销售率',
            type:'line',
            data:[56.74, 75.22, 64.55, 91.46, 81.85]
        }
    ]
    };

    chart1.setOption(chart1Option);
}
function chart2 () {
	var chart2 = echarts.init(document.getElementById('chart2'));

	var chart1Option = {
    title : {
        text: '房屋户型面积销售率（%）',
        subtext: ''
    },
    legend: {
        data:['房屋户型面积销售率'],
        x: 'right'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            splitLine: {
            	show: false,
            },

            data : ['60㎡以下','60-90㎡','90-120㎡','120-150㎡','150㎡以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true,
            axisLabel : {
                formatter: '{value} '
            },
            splitLine: {
            	show: true,
            	lineStyle: {
            		color: '#aaa',
				    width: 1,
				    type: 'dashed'
            	}
            }
        }
    ],
    series : [
        {
            name:'房屋户型面积销售率',
            type:'line',

            data:[63.56, 68.54, 86.62, 88.55, 67.99]
        }
    ]
    };
    chart2.setOption(chart1Option);
}
function chart3 () {
	var chart3 = echarts.init(document.getElementById('chart3'));

	var chart1Option = {
    title : {
        text: '历年交易金额（亿元）',
        subtext: ''
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            splitLine: {
            	show: false,
            },
            data : ['2013','2014','2015']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true,
            axisLabel : {
                formatter: '{value}'
            },
            splitLine: {
            	show: true,
            	lineStyle: {
            		color: '#aaa',
				    width: 1,
				    type: 'dashed'
            	}
            }
        }
    ],
    series : [
        {
            name:'交易金额',
            type:'line',
            data:[106.9, 169.5, 257.2]
        }
    ]
    };

    chart3.setOption(chart1Option);
}