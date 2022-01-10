var LookUPControl;
var AdminControl;
////////////////////BEGIN Document ready operations // /////////
$(document).ready(function() {
	$('#RibbonSourceControl').val("");
	$('#RibbonSourceControl').val("reports");
	LookUPControl = new $.LookUPControl();
	Layout = new $.Layout();
	AdminControl = new $.AdminControl();
	
	/////////////start Report  Request Details ///////////////
	$('#reqDReportBtn').unbind().click(function(e) {
		e.preventDefault();
		if (!$("#reqDReport_CorrNumber").validationEngine('validate')) {
			return false;
		}
		var critria='';
		var webReportsUrl = CorrUtilControl.getDecryptedDataStr(propJSON.REPORTS_URL);
		var reportUrl= webReportsUrl + '/Report?operation=corrDetails';
		
		if ($('#reqDReport_CorrNumber').val() && $('#reqDReport_CorrNumber').val().length != 0) {
			var corrNumber = $('#reqDReport_CorrNumber').val();
			critria = critria+'&corrNumber='+corrNumber;
			}
		if ($('input[name=reqDReport_reportType]:checked','#reqDetailsReportform').val().length != 0) {
			var reportType = $('input[name=reqDReport_reportType]:checked','#reqDetailsReportform').val();
			critria = critria+'&reportType='+reportType;
		}
		if( critria ) {
			reportUrl = reportUrl+critria;
		}
		window.open(reportUrl, "", "height=700,width=1000");
		
	});

	////////////End Report corr Detailes/////////////////////
//////////////performance report operations  BEGIN ////////////////////

$('#performance_Department').change(function(e) {
	var selected = $(e.target).val();
	getEmpListByDeptListLookup(selected);

});	
$('#performance_Routes_Department').change(function(e) {
	var selected = $(e.target).val();
	getEmpListByDeptListLookup(selected);

});	

$('#performanceReportBtn').unbind().click(function(e) {
	e.preventDefault();
	if (!$("#performanceForm").validationEngine('validate')) {
		return false;
	}
	
	if($('#performance_DateFrom').val() && $('#performance_DateTo').val()) {
		var compared = Layout.compareDates($('#performance_DateFrom').val(), $('#performance_DateTo').val());
		if(!compared) {
			swal("", $.i18n.prop('dateCompare'), "info");
			return;
		}	
	}
	
	var critria='';
	var webReportsUrl = CorrUtilControl.getDecryptedDataStr(propJSON.REPORTS_URL);
	var reportUrl= webReportsUrl + '/Report?operation=employeePerformanceAddedCorr';
	if ($('#performance_Employee').val() && $('#performance_Employee').val().length != 0) {
		var employee = $('#performance_Employee').val();
		critria = critria+'&employee='+employee;
		  }else if ($('#performance_Department').val() && $('#performance_Department').val().length != 0) {	
			var reqDept = $('#performance_Department').val();
			critria = critria+'&reqDept='+reqDept;
		  }		
		if ($('#performance_DateFrom').val() && $('#performance_DateFrom').val().length != 0) {
			var requestDateFrom = $('#performance_DateFrom').val();
			critria = critria+'&dateFrom='+requestDateFrom;
		}
		if ($('#performance_DateTo').val() && $('#performance_DateTo').val().length != 0) {
			var requestDateTo = $('#performance_DateTo').val();
			critria = critria+'&dateTo='+requestDateTo;
		}
		if ($('input[name=performance_reportType]:checked','#performanceForm').val().length != 0) {
			var reportType = $('input[name=performance_reportType]:checked','#performanceForm').val();
			critria = critria+'&reportType='+reportType;
		}
	if( critria ) {
		reportUrl = reportUrl+critria;
	}
			
	window.open(reportUrl, "", "height=700,width=1000");
	
});

$('#performance_Routes_ReportBtn').unbind().click(function(e) {
	e.preventDefault();
	if (!$("#performance_Routes_Form").validationEngine('validate')) {
		return false;
	}
	if($('#performance_Routes_DateFrom').val() && $('#performance_Routes_DateTo').val()) {
		var compared = Layout.compareDates($('#performance_Routes_DateFrom').val(), $('#performance_Routes_DateTo').val());
		if(!compared) {
			swal("", $.i18n.prop('dateCompare'), "info");
			return;
		}	
	}
	
	var critria='';
	var webReportsUrl = CorrUtilControl.getDecryptedDataStr(propJSON.REPORTS_URL);
	var reportUrl= webReportsUrl + '/Report?operation=employeePerformanceRoutes';
	if ($('#performance_Routes_Employee').val() && $('#performance_Routes_Employee').val().length != 0) {
		var employee = $('#performance_Routes_Employee').val();
		critria = critria+'&employee='+employee;
		  }else if ($('#performance_Routes_Department').val() && $('#performance_Routes_Department').val().length != 0) {	
			var reqDept = $('#performance_Routes_Department').val();
			critria = critria+'&reqDept='+reqDept;
		  }		
		if ($('#performance_Routes_DateFrom').val() && $('#performance_Routes_DateFrom').val().length != 0) {
			var requestDateFrom = $('#performance_Routes_DateFrom').val();
			critria = critria+'&dateFrom='+requestDateFrom;
		}
		if ($('#performance_Routes_DateTo').val() && $('#performance_Routes_DateTo').val().length != 0) {
			var requestDateTo = $('#performance_Routes_DateTo').val();
			critria = critria+'&dateTo='+requestDateTo;
		}
		if ($('input[name=performance_Routes_reportType]:checked','#performance_Routes_Form').val().length != 0) {
			var reportType = $('input[name=performance_Routes_reportType]:checked','#performance_Routes_Form').val();
			critria = critria+'&reportType='+reportType;
		}
	if( critria ) {
		reportUrl = reportUrl+critria;
	}
			
	window.open(reportUrl, "", "height=700,width=1000");
	
});

//////////////performance report operations  END ////////////////////
//////////////general incoming report operations  BEGIN ////////////////////

$('#generalIncReportBtn').unbind().click(function(e) {
	e.preventDefault();
	if (!$("#generalIncForm").validationEngine('validate')) {
		return false;
	}
	
	if($('#generalInc_DateFrom').val() && $('#generalInc_DateTo').val()) {
		var compared = Layout.compareDates($('#generalInc_DateFrom').val(), $('#generalInc_DateTo').val());
		if(!compared) {
			swal("", $.i18n.prop('dateCompare'), "info");
			return;
		}	
	}
	
	var critria='';
	var webReportsUrl = CorrUtilControl.getDecryptedDataStr(propJSON.REPORTS_URL);
	var reportUrl= webReportsUrl + '/Report?operation=generalIncomingInbox';
		if ($('#generalInc_Department').val() && $('#generalInc_Department').val().length != 0) {	
			var generalIncDep = $('#generalInc_Department').val();
			critria = critria+'&generalIncDep='+generalIncDep;
		  }	
		
//		if($("input[name='generalInc_CorrespondenceType']:checked").val() && $("input[name='generalInc_CorrespondenceType']:checked").val().length != 0){
//			var generalIncCorrType = $("input[name='generalInc_CorrespondenceType']:checked").val();
//			critria = critria+'&generalIncCorrType='+generalIncCorrType;
//		}
		if ($('#generalInc_corrRelatedDepartment').val() && $('#generalInc_corrRelatedDepartment').val().length != 0) {
			var generalIncDepartmentId = $('#generalInc_corrRelatedDepartment').val();
			if($("input[name='generalInc_CorrespondenceType']:checked").val() == "1"){
				critria = critria+'&generalIncDepartmentId='+generalIncDepartmentId;
			}
			else if($("input[name='generalInc_CorrespondenceType']:checked").val() == "2"){
				critria = critria+'&generalIncSiteId='+generalIncDepartmentId;
			}
		}
		
		if ($('#generalInc_DateFrom').val() && $('#generalInc_DateFrom').val().length != 0) {
			var requestDateFrom = $('#generalInc_DateFrom').val();
			critria = critria+'&dateFrom='+requestDateFrom;
		}
		if ($('#generalInc_DateTo').val() && $('#generalInc_DateTo').val().length != 0) {
			var requestDateTo = $('#generalInc_DateTo').val();
			critria = critria+'&dateTo='+requestDateTo;
		}
		if ($('input[name=generalInc_reportType]:checked','#generalIncForm').val().length != 0) {
			var reportType = $('input[name=generalInc_reportType]:checked','#generalIncForm').val();
			critria = critria+'&reportType='+reportType;
		}
	if( critria ) {
		reportUrl = reportUrl+critria;
	}
			
	window.open(reportUrl, "", "height=700,width=1000");
	
});


//////////////general incoming report operations  END ////////////////////

//////////////general incoming report operations  BEGIN ////////////////////

$('#generalIncStaReportBtn').unbind().click(function(e) {
	e.preventDefault();
	if (!$("#generalIncStaForm").validationEngine('validate')) {
		return false;
	}			
	
	var critria='';
	var webReportsUrl = CorrUtilControl.getDecryptedDataStr(propJSON.REPORTS_URL);
	var reportUrl= webReportsUrl + '/Report?operation=inBoxStatistics';
		if ($('#generalIncSta_Department').val() && $('#generalIncSta_Department').val().length != 0) {	
			var generalIncStaDep = $('#generalIncSta_Department').val();
			critria = critria+'&generalIncDep='+generalIncStaDep;
		  }		
		if ($('#generalIncSta_DateFrom').val() && $('#generalIncSta_DateFrom').val().length != 0) {
			var requestDateFrom = $('#generalIncSta_DateFrom').val();
			critria = critria+'&dateFrom='+requestDateFrom;
		}
		if ($('#generalIncSta_DateTo').val() && $('#generalIncSta_DateTo').val().length != 0) {
			var requestDateTo = $('#generalIncSta_DateTo').val();
			critria = critria+'&dateTo='+requestDateTo;
		}
		if ($('input[name=generalIncSta_reportType]:checked','#generalIncStaForm').val().length != 0) {
			var reportType = $('input[name=generalIncSta_reportType]:checked','#generalIncStaForm').val();
			critria = critria+'&reportType='+reportType;
		}
	if( critria ) {
		reportUrl = reportUrl+critria;
	}
			
	window.open(reportUrl, "", "height=700,width=1000");
	
});

$("#generalInc_Internal").click(function () {
    $("#generalInc_corrSiteType").attr("disabled", true);
    $("#generalInc_corrSiteType").css("background-color", "#eee");
    $("#generalInc_corrSiteType").val("");
    $("#generalInc_corrRelatedDepartment").addClass('validate[required]');
    $('#generalInc_corrRelatedDepartmentSP').removeClass('NoneDisplay');
});

$("#generalInc_External").click(function () {
    $("#generalInc_corrSiteType").removeAttr("disabled");
    $("#generalInc_corrSiteType").css("background-color", "#fff");
    $("#generalInc_corrRelatedDepartment").addClass('validate[required]');
    $('#generalInc_corrRelatedDepartmentSP').removeClass('NoneDisplay');
});

/*
 * handle change to get Correspondence Type lookup
 */
$("input[name='generalInc_CorrespondenceType']").change(function(e) {
	if ($(this).val() == '1') {
		$('#generalInc_corrSiteType').find('option').remove().end();
		getSearchCorrRelatedDepartmentLookup();
	} else if ($(this).val() == '2') {
		$('#generalInc_corrRelatedDepartment').find('option').remove().end();
		getSearchCorrSiteTypeLookup();
	}
});

///*
// * get Correspondence Type lookup
// */
//if ($("input[name='CorrType']").val() == '1') {
//	getSearchCorrRelatedDepartmentLookup();
//} else if ($("input[name='CorrType']").val() == '2') {
//	$('#searchCorrRelatedDepartment').find('option').remove().end();
//	getSearchCorrSiteTypeLookup();
//}

/*
 * get Correspondence Search Site Lookup
 */
$("#generalInc_corrSiteType").on('change', function() {
	var type = $("#generalInc_corrSiteType").val();
	if (type == "" || type == null) {
		$('#generalInc_corrRelatedDepartment').find('option').remove().end();
	} else {
		getSearchCorrSiteLookup(type);
	}
});


//////////////general incoming report operations  END ////////////////////


//////////////outbox report operations  BEGIN ////////////////////

$('#outboxReportBtn').unbind().click(function(e) {
	e.preventDefault();
	if (!$("#outboxReportForm").validationEngine('validate')) {
		return false;
	}
	
	if($('#outboxReport_DateFrom').val() && $('#outboxReport_DateTo').val()) {
		var compared = Layout.compareDates($('#outboxReport_DateFrom').val(), $('#outboxReport_DateTo').val());
		if(!compared) {
			swal("", $.i18n.prop('dateCompare'), "info");
			return;
		}	
	}
	
	var critria='';
	var webReportsUrl = CorrUtilControl.getDecryptedDataStr(propJSON.REPORTS_URL);
	var reportUrl= webReportsUrl + '/Report?operation=generalOutbox';
		if ($('#outboxReport_Department').val() && $('#outboxReport_Department').val().length != 0) {	
			var department = $('#outboxReport_Department').val();
			critria = critria+'&department='+department;
		  }		
		if ($('#outboxReport_DateFrom').val() && $('#outboxReport_DateFrom').val().length != 0) {
			var requestDateFrom = $('#outboxReport_DateFrom').val();
			critria = critria+'&dateFrom='+requestDateFrom;
		}
		if ($('#outboxReport_DateTo').val() && $('#outboxReport_DateTo').val().length != 0) {
			var requestDateTo = $('#outboxReport_DateTo').val();
			critria = critria+'&dateTo='+requestDateTo;
		}
		if ($('input[name=outbox_reportType]:checked','#outboxReportForm').val().length != 0) {
			var reportType = $('input[name=outbox_reportType]:checked','#outboxReportForm').val();
			critria = critria+'&reportType='+reportType;
		}
	if( critria ) {
		reportUrl = reportUrl+critria;
	}
			
	window.open(reportUrl, "", "height=700,width=1000");
	
});


//////////////outbox report operations  END ////////////////////

//////////////outbox report operations  BEGIN ////////////////////

$('#outboxStaReportBtn').unbind().click(function(e) {
	e.preventDefault();
	if (!$("#outboxStaReportForm").validationEngine('validate')) {
		return false;
	}
	
	if($('#outboxStaReport_DateFrom').val() && $('#outboxStaReport_DateTo').val()) {
		var compared = Layout.compareDates($('#outboxStaReport_DateFrom').val(), $('#outboxStaReport_DateTo').val());
		if(!compared) {
			swal("", $.i18n.prop('dateCompare'), "info");
			return;
		}	
	}
	
	var critria='';
	var webReportsUrl = CorrUtilControl.getDecryptedDataStr(propJSON.REPORTS_URL);
	var reportUrl= webReportsUrl + '/Report?operation=outboxStatistics';
		if ($('#outboxStaReport_Department').val() && $('#outboxStaReport_Department').val().length != 0) {	
			var department = $('#outboxStaReport_Department').val();
			critria = critria+'&department='+department;
		  }		
		if ($('#outboxStaReport_DateFrom').val() && $('#outboxStaReport_DateFrom').val().length != 0) {
			var requestDateFrom = $('#outboxStaReport_DateFrom').val();
			critria = critria+'&dateFrom='+requestDateFrom;
		}
		if ($('#outboxStaReport_DateTo').val() && $('#outboxStaReport_DateTo').val().length != 0) {
			var requestDateTo = $('#outboxStaReport_DateTo').val();
			critria = critria+'&dateTo='+requestDateTo;
		}
		if ($('input[name=outboxSta_reportType]:checked','#outboxStaReportForm').val().length != 0) {
			var reportType = $('input[name=outboxSta_reportType]:checked','#outboxStaReportForm').val();
			critria = critria+'&reportType='+reportType;
		}
	if( critria ) {
		reportUrl = reportUrl+critria;
	}
			
	window.open(reportUrl, "", "height=700,width=1000");
	
});


//////////////outboxSta report operations  END ////////////////////


getReportListDepartments();
getInboxGeneralLookup();
getOutboxReportLookup();

});

////////////////////End Document ready operations // /////////


/*
 * get list of all departments for lookup
 */

this.getReportListDepartments = function() {
	
	var data;
	LookUPControl.getForwardDepartmentLookupReport(function(d) {
		// processing the data
		data = d;
		$('#performance_Department').find('option').remove().end();
		$('#performance_Routes_Department').find('option').remove().end();
		if (data) {
			$('#report_reqDepartment').append('<option value="">...</option>');
			data.data.forEach(function(entry) {
				$('#performance_Department').append('<option value=' + entry.id + '>' + entry.adescription + '</option>');
				$('#performance_Routes_Department').append('<option value=' + entry.id + '>' + entry.adescription + '</option>');
			});
			$('#Tprogress').addClass('hidden');
		}else {
			ResourceMessageControl.getResourceMessage(jsonTemplate,'searchError');
			$('#Tprogress').addClass('hidden');
		}
		$('#Tprogress').addClass('hidden');
	});

//	var operation = 'getListDepartments';
	//var operation = 'getDepInboxList';
//	AdminControl.getLookupList(operation, function(jsonTemplate) {
//		if (jsonTemplate.status == true) {
//			$('#performance_Department').find('option').remove().end();
//			$('#performance_Routes_Department').find('option').remove().end();
//			
//			if (jsonTemplate.data.length > 0) {				
////				$('#report_reqDepartment').append('<option value="" selected>...</option>');
//				jsonTemplate.data.forEach(function(entry) {
//					$('#performance_Department').append('<option value=' + entry.departmentId + '>' + entry.departmentName + '</option>');
//					$('#performance_Routes_Department').append('<option value=' + entry.departmentId + '>' + entry.departmentName + '</option>');
//				});
//			}
//			$('#Tprogress').addClass('hidden');
//		} else {
//			ResourceMessageControl.getResourceMessage(jsonTemplate,'searchError');
//			$('#Tprogress').addClass('hidden');
//		}
//	});

}; 
/**
 * get EmpList By Dept List Lookup
 */
this.getEmpListByDeptListLookup = function(deptList){
//	$('#departmentsReport_emps').find('option').remove().end();
	$('#report_reqEmployee').find('option').remove().end();
	$('#performance_Employee').find('option').remove().end();
	$('#performance_Routes_Employee').find('option').remove().end();
	
	if (deptList != null) {
//		var req_requiredSearchOperation = $("#req_requiredSearchOperation").val();
		var data;
		LookUPControl.getSearchCorrEmpListByDeptListLookupReport("", deptList, function(d) {
			
			data = d;
			// $('#searchCorrEmp').append('<option value="">...</option>');
			data.data.forEach(function(entry) {
//				$('#departmentsReport_emps').append('<option value=' + entry.id + '>' + entry.name + '</option>');
				$('#report_reqEmployee').append('<option value=' + entry.id + '>' + entry.adescription + '</option>');
				$('#performance_Employee').append('<option value=' + entry.id + '>' + entry.adescription + '</option>');
				$('#performance_Routes_Employee').append('<option value=' + entry.id + '>' + entry.adescription + '</option>');
			});
			$('#Tprogress').addClass('hidden');
		});
	}

};

/*
 * getInboxGeneralLookup
 */

this.getInboxGeneralLookup = function() {
	
	var data;
	LookUPControl.getInboxGeneralLookupListReport(function(d) {
		// processing the data
		data = d;
		$('#generalInc_Department').find('option').remove().end();
		$('#generalIncSta_Department').find('option').remove().end();
		if (data) {
			$('#report_reqDepartment').append('<option value="">...</option>');
			data.data.forEach(function(entry) {
				$('#generalInc_Department').append('<option value=' + entry.id + '>' + entry.description + '</option>');
				$('#generalIncSta_Department').append('<option value=' + entry.id + '>' + entry.description + '</option>');
			});
			$('#Tprogress').addClass('hidden');
		}else {
			ResourceMessageControl.getResourceMessage(jsonTemplate,'searchError');
			$('#Tprogress').addClass('hidden');
		}
		$('#Tprogress').addClass('hidden');
	});

//	var operation = 'getInboxGeneralListReport';
//	//var operation = 'getDepInboxList';
//	AdminControl.getLookupList(operation, function(jsonTemplate) {
//		if (jsonTemplate.status == true) {
//			$('#generalInc_Department').find('option').remove().end();
//			$('#generalIncSta_Department').find('option').remove().end();
//			if (jsonTemplate.data.length > 0) {				
////				$('#report_reqDepartment').append('<option value="" selected>...</option>');
//				jsonTemplate.data.forEach(function(entry) {
//					$('#generalInc_Department').append('<option value=' + entry.id + '>' + entry.description + '</option>');
//					$('#generalIncSta_Department').append('<option value=' + entry.id + '>' + entry.description + '</option>');
//				});
//			}
//			$('#Tprogress').addClass('hidden');
//		} else {
//			ResourceMessageControl.getResourceMessage(jsonTemplate,'searchError');
//			$('#Tprogress').addClass('hidden');
//		}
//	});

}; 
this.getOutboxReportLookup = function() {
	
	var data;
	LookUPControl.getInboxGeneralLookupListReport(function(d) {
		// processing the data
		data = d;
		$('#outboxReport_Department').find('option').remove().end();
		$('#outboxStaReport_Department').find('option').remove().end();
		if (data) {
			$('#report_reqDepartment').append('<option value="">...</option>');
			data.data.forEach(function(entry) {
				$('#outboxReport_Department').append('<option value=' + entry.id + '>' + entry.description + '</option>');
				$('#outboxStaReport_Department').append('<option value=' + entry.id + '>' + entry.description + '</option>');
			});
			$('#Tprogress').addClass('hidden');
		}else {
			ResourceMessageControl.getResourceMessage(jsonTemplate,'searchError');
			$('#Tprogress').addClass('hidden');
		}
		$('#Tprogress').addClass('hidden');
	});

//	var operation = 'getInboxGeneralListReport';
//	//var operation = 'getDepInboxList';
//	AdminControl.getLookupList(operation, function(jsonTemplate) {
//		if (jsonTemplate.status == true) {
//			$('#outboxReport_Department').find('option').remove().end();
//			$('#outboxStaReport_Department').find('option').remove().end();
//			if (jsonTemplate.data.length > 0) {				
////				$('#report_reqDepartment').append('<option value="" selected>...</option>');
//				jsonTemplate.data.forEach(function(entry) {
//					$('#outboxReport_Department').append('<option value=' + entry.departmentId + '>' + entry.description + '</option>');
//					$('#outboxStaReport_Department').append('<option value=' + entry.departmentId + '>' + entry.description + '</option>');
//				});
//			}
//			$('#Tprogress').addClass('hidden');
//		} else {
//			ResourceMessageControl.getResourceMessage(jsonTemplate,'searchError');
//			$('#Tprogress').addClass('hidden');
//		}
//	});

}; 
/**
 * get Correspondence related department lookup
 */
function getSearchCorrRelatedDepartmentLookup() {
	var data;
	LookUPControl.getCorrRelatedDepartmentLookup(function(d) {
		data = d;
		$('#generalInc_corrRelatedDepartment').find('option').remove().end();
		$('#generalInc_corrRelatedDepartment').append('<option value="">...</option>');
		data.data.forEach(function(entry) {
			$('#generalInc_corrRelatedDepartment').append('<option value=' + entry.id + '>' + entry.adescription + '</option>');
		});
		$('#Tprogress').addClass('hidden');
	});
};
/**
 * get Correspondence site type lookup
 */
function getSearchCorrSiteTypeLookup() {
	var data;
	LookUPControl.getCorrSiteTypeLookup(function(d) {
		data = d;
		$('#generalInc_corrSiteType').find('option').remove().end();
		$('#generalInc_corrSiteType').append('<option value="">...</option>');
		data.data.forEach(function(entry) {
			$('#generalInc_corrSiteType').append('<option value=' + entry.id + '>' + entry.adescription + '</option>');
		});
		$('#Tprogress').addClass('hidden');
	});
};
/**
 * get Correspondence site lookup
 */
function getSearchCorrSiteLookup(type) {
	var data;
	LookUPControl.getCorrSiteLookup(type, function(d) {
		data = d;
		$('#generalInc_corrRelatedDepartment').find('option').remove().end();
		$('#generalInc_corrRelatedDepartment').append('<option value="">...</option>');
		data.data.forEach(function(entry) {
			$('#generalInc_corrRelatedDepartment').append('<option value=' + entry.id + '>' + entry.adescription + '</option>');
		});
		$('#Tprogress').addClass('hidden');
	});
};
	