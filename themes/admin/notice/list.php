<?php $this->load->view($cfg['tpl_admin'] . 'public/header')?>
<div class="so_main">
  <div class="page_tit">企业公告管理</div>
  <!-------- 搜索企业公告 -------->
  <div id="searchUser_div" style="display:none;">
  	<div class="page_tit">搜索企业公告 [ <a href="javascript:void(0);" onclick="searchUser();">隐藏</a> ]</div>
	
	<div class="form2">
	<form id="form3" method="post" action="<?php echo site_url("admin/notice/listNotice");?>">
	<dl class="lineD">
      <dt>标题</dt>
      <dd>
        <input type="text" name="s_title" value="<?php echo $s_title?>"/>
      </dd>
    </dl>
    <div class="page_btm">
      <input type="submit" class="btn_b" value="确定" />
    </div>
	</form>
  </div>
  </div>
  <!-------- 广告列表 -------->
  <div class="Toolbar_inbox">
  	<div class="page right"></div>
	<a href="<?php echo site_url('admin/notice/add')?>" class="btn_a"><span>添加企业公告</span></a>
	<a href="javascript:void(0);" class="btn_a" onclick="searchUser();">
		<span class="searchUser_action">搜索企业公告</span>
	</a>
	<a  class="btn_a"  onclick="delMoreArticle()"><span>删除企业公告</span></a>
  </div>
  <div class="list">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <th style="width:30px;">
		<input type="checkbox" id="checkbox_handle" onclick="checkAll(this)" value="0">
    	<label for="checkbox"></label>
	</th>
    <th class="line_l" width="50px">ID</th>
    <th class="line_l" width="300px">标题</th>
	<th class="line_l" width="150px">创建时间</th>
	<!--<th class="line_l" width="50px">排序</th>-->
    <th class="line_l">状态</th>
    <th class="line_l">操作</th>
  </tr>
	  </tr>
	  <form id="form1" name="form1" action="" method="post">
	  <?php foreach ($list as $k=>$v) {?>
	  <tr overstyle='on' id="user_1">
	  	<td><input type="checkbox" name="noticeid[]" id="checkbox2" onclick="checkon(this)" value="<?php echo $v['noticeid']; ?>"></td>
		<td><?php echo $v['noticeid']; ?></td>
	    <td><?php echo $v['title']; ?></td>
		<td><?php echo date('Y-m-d',$v['ctime']); ?></td>
		<!--<td><?php echo $v['sort']; ?></td>-->
	    <td><?php if ($v['status'] == '1') { ?><B>激活</B><?php } else { ?><B style="color:red">未激活</B><?php } ?></td>
	    <td>
			<a href="<?php echo site_url('admin/notice/editArticle' .'/' . $v['noticeid'])?>">编辑</a>
				<a href="javascript:copyArticle(<?php echo $v['noticeid']; ?>);">复制</a>
			<a href="javascript:delArticle(<?php echo $v['noticeid']; ?>);">删除</a>
		</td>
			</tr>
		<?php }?>
		</form>
	</table>
  </div>
<td colspan="9"><div class="page">记录:<?php echo $pagecount; ?> 条&nbsp;&nbsp;<?php echo $page;?></div></td>

  <div class="Toolbar_inbox">
	<div class="page right"></div>
	<a href="<?php echo site_url('admin/notice/add')?>" class="btn_a"><span>添加企业公告</span></a>
	<a href="javascript:void(0);" class="btn_a" onclick="searchUser();">
		<span class="searchUser_action">搜索企业公告</span>
	</a>
	<a  class="btn_a"  onclick="delMoreArticle()"><span>删除企业公告</span></a>
  </div>
</div>
<script>
	//鼠标移动表格效果
	$(document).ready(function(){
		$("tr[overstyle='on']").hover(
		  function () {
		    $(this).addClass("bg_hover");
		  },
		  function () {
		    $(this).removeClass("bg_hover");
		  }
		);
	});
	
	function checkon(o){
		if( o.checked == true ){
			$(o).parents('tr').addClass('bg_on') ;
		}else{
			$(o).parents('tr').removeClass('bg_on') ;
		}
	}
	
	function checkAll(o){
		if( o.checked == true ){
			$('input[name="noticeid[]"]').attr('checked','true');
			$('tr[overstyle="on"]').addClass("bg_on");
		}else{
			$('input[name="noticeid[]"]').removeAttr('checked');
			$('tr[overstyle="on"]').removeClass("bg_on");
		}
	}

	//搜索企业公告
	var isSearchHidden = 1;
	function searchUser() {
		if(isSearchHidden == 1) {
			$("#searchUser_div").slideDown("fast");
			$(".searchUser_action").html("搜索完毕");
			isSearchHidden = 0;
		}else {
			$("#searchUser_div").slideUp("fast");
			$(".searchUser_action").html("搜索企业公告");
			isSearchHidden = 1;
		}
	}

	function folder(type, _this) {
		$('#search_'+type).slideToggle('fast');
		if ($(_this).html() == '展开') {
			$(_this).html('收起');
		}else {
			$(_this).html('展开');
		}
		
	}

	//复制
	function copyArticle(articleid)
	{
			$.get("<?php echo site_url('admin/notice/copyArticle');?>"+"/"+articleid, 
			function(d){
				var data = eval('('+d+')');
				if (data.code == '1')
				{
					location.reload();
				}
				else
				{
					jBox.tip(data.msg, 'error');
				}
			});
	}

	//删除
	function delArticle(articleid)
	{
	var submit = function (v, h, f) {
		if (v == 'ok')
			$.get("<?php echo site_url('admin/notice/delArticle');?>"+"/"+articleid, 
			function(d){
				var data = eval('('+d+')');
				if (data.code == '1')
				{
//					jBox.tip(data.msg, 'success');
//					jBox.tip(data.msg, 'success');
					location.reload();
				}
				else
				{
					jBox.tip(data.msg, 'error');
				}
			});
		else if (v == 'cancel')
//			jBox.tip(v, 'info');
		return true; //close
	};

	$.jBox.confirm("确定删除该公告吗？", "提示", submit);

}

	function delMoreArticle()
	{
		postdata('form1', "<?php echo site_url('admin/notice/delMoreArticle');?>", 'wshow');
	}

</script>


<?php $this->load->view($cfg['tpl_admin'] . 'public/footer')?>