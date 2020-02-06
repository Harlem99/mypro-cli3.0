<style lang="less" scoped>
    .file-con {
		position: relative;
		#file {
			position: absolute;
			left: 0;
			width: 100px;
			opacity: 0;
		}
		.fjSpan{
			width: 46%;
			display: inline-block;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			
		}
		ul {
			list-style: none;
		}
		#fileItem {
			display: inline-block;
			width: calc(~'100% - 118px');
			li {
				position: relative;
    			top: 5px;
			}
		}
		.fill {
			animation: move 1.5s;
			text-align: center;
			background-color: #2593f7;
			width: 70%;
			/*width: 80%;*/
			height: 10px;
			display: inline-block;
			border-radius: 20px;
			height: 8px;
			line-height: 8px;
		}
	}
	@keyframes move {
		0% {
			width: 0;
		}
		100% {
			width: 70%;
			/*width: 100%;*/
		}
	}
	
	.progressbar {
		display: inline-block;
		width: 40%;
		/*padding-left: 25px;*/
	}
</style>

<template>
	<div class="file-con">
		<div>
			<Button icon="ivu-icon ivu-icon-ios-cloud-upload-outline" class="uploadBtn">上传文件</Button>
			<input type="file" name="files" :accept="accept" id="file" @change="change($event)" :multiple="multiple" />
			<ul id="fileItem">
				<li v-for="(item,index) in obj.fileList" :key="index">
					<span class="fjSpan" :title="item.name">{{item.name}}</span>
					<div class="progressbar">
						<div class="fill" style="height:10px;vertical-align: top;"></div>
						<i class="el-icon-error" @click="del(index)" style="vertical-align: top;"></i>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		props: {
			numbers: { //最多上传文件的个数
				type: Number,
				default: 1
			},
			multiple: { //是否可以上传多个文件
				type: Boolean,
				default: true
			},
			size: { //上传文件的大小
				type: Number,
				default: 1048576
			},
			accept: {   //accept="image/jpg,image/jpeg,image/png"
				type: String,
				default: '' 
			},
			choiceList: {
				type: Array,
				default: function() {
					return []
				}
			},
			acIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				obj: {
					fileList: [],
					files: {},
					actIndex: 0,
				},
		
			};
		},
		methods: {
			change(e) {
				if(this.multiple) { //支持多选 [需求是只上传一个]
					let files = e.target.files;
					if(files.length > this.numbers || (files.length + this.obj.fileList.length) > this.numbers) { //判断上传的个数
						this.$Notice.warning({
							title: '最多只能上传' + this.numbers + '个文件。'
						});
						return
					}
					let arr = Object.keys(files);
					for(var key in files) {
						if((files[key].size) / 1024 > this.size) {
							this.$Notice.warning({
								title: '最多只能上传大小为' + (this.size / 1024) + 'M的文件。'
							});
							return
						}
					}
					if(this.obj.fileList.length >= this.numbers) { //判断上传的个数
						this.$Notice.warning({
							title: '最多只能上传' + this.numbers + '个文件。'
						});
						return
					}

					$.each(files, (index, val) => { //判断上传是否有重复
						let flag = false;
						$.each(this.obj.fileList, (indexs, value) => {
							if(value.name == val.name) {
								flag = true;
							}
						})
						if(this.choiceList && this.choiceList.length) {
							$.each(this.choiceList, (i, v) => {
								if(val.name == v.filename + '.' + v.category) {
									flag = true;
								}
							})
						}
						if(flag) {
							this.$Notice.warning({
								title: '文件' + val.name + '的文件已经上传。'
							});
							return
						} else {
							this.obj.files = val;
							const fileType =  ['png', 'jpg', 'bmp', 'tiff', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip', 'rar', 'mp4','rmvb', 'rm', 'asf', 'txt','csv'];
							let extFileArr = val.name.split('.');
							let extFile = '';
							if (extFileArr.length > 1 && extFileArr[0] !== '') {
								extFile = extFileArr[extFileArr.length -1].toLowerCase();
							}
							if(fileType.find(o => o === extFile)){
								this.obj.fileList.push(val);
								this.obj.actIndex = this.acIndex;
							} else {
								this.$Notice.warning({
									title: '不支持的文件类型'
								});
								return 
							}
							this.upload(val)
							
						}
						this.$emit('on-change', this.obj);
						console.log(this.obj)
					})
					e.target.value = '';
				} else {
					let files = e.target.files;
					if(files.size > this.size) {
						this.$Notice.warning({
							title: '最多只能上传大小为' + this.size + '的文件。'
						});
						return
					}
					//console.log('bbb',files)
					if(files.type){
						this.obj.fileList = $.extend(true, [], files);
					}
					this.upload(this.obj.fileList[0]);
					this.$emit('on-change', this.obj);
					console.log(this.obj)
					e.target.value = '';
				}
			},
			upload(files) {
				let self = this;
				//var reader = new FileReader();
				// reader.readAsDataURL(files);
				// reader.onload = function(event) {
				// 	var fill = document.getElementsByClassName('fill');
				// 	var count = 0;
				// 	//通过间隔定时器实现百分比文字效果,通过计算CSS动画持续时间进行间隔设置
				// 	var timer = setInterval(function(e) {
				// 		count++;
				// 		fill.innerHTML = count + '%';
				// 		if(count === 100) clearInterval(timer);
				// 	}, 17);
				// 	self.obj.baseArr.push(event.target.result);
				// 	console.log('event',event);
				// }
			},
			del(index) {
				this.obj.fileList.splice(index, 1)
			}
		},
	};
</script>