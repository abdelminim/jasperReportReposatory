<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="js/application/reportsControl.js"></script>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<fmt:setLocale value="${sessionScope.defaultLang}" />
 
<fmt:bundle basename="com.itblocks.cms.ui.message.message">
<div class="newSend">
    <div class="col-xs-12 formTable NoPadding">
        <div class="TitlePanel">
            <div class="row MarginRow">
                <div class="col-sm-9 col-xs-12">
                    <h5 style="padding-right: 12px"><fmt:message key="correspondenceStatusReport" /></h5>
                </div>
            </div>
        </div>
        <div id="zcollapse1s" class="panel-collapse collapse in" aria-expanded="true">
            <div class="panel-body">
                <form id="corrStatusForm">
                    <div class="tab1">
                        <div class="col-xs-12">
                        <div class="row">
                                	<div class="col-sm-4 col-xs-12 marginBottom">
										<i class="glyphicon glyphicon-log-in"></i> <span class="cell-label"><fmt:message key="corresponadenceStatus" /></span> <select class="select2"
											id="corrStatus_filter" multiple></select>
									</div>                                      
									<div class="col-sm-3 col-xs-12 has-cal">
										<i class="glyphicon glyphicon-calendar"></i> <span class="cell-label"><fmt:message key="folloUpPanelDateFrom" /></span>
										<div class="row">
											<div class="col-xs-12">
												<input type="text" id="corrStatus_DateFrom" class="form-control popupDatepicker-ml " placeholder="yyyy/mm/dd">
											</div>
										</div>
									</div>
									<div class="col-sm-3 col-xs-12 has-cal">
										<i class="glyphicon glyphicon-calendar"></i> <span class="cell-label"><fmt:message key="folloUpPanelDateTo" /></span>
										<div class="row">
											<div class="col-xs-12">
												<input type="text" id="corrStatus_DateTo" class="form-control popupDatepicker-ml " placeholder="yyyy/mm/dd">
											</div>
										</div>
									</div>
								 
                            </div>
                            <div class="row">
                                <div class="col-sm-4 col-xs-12">
                                    <i class="glyphicon glyphicon-th-list"></i> <span class="cell-label"><fmt:message key="theDepartment" />
                                    </span>
                                    <select class="select2" id="corrStatus_Department"  multiple></select>
                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    <i class="glyphicon glyphicon-th-list"></i> <span class="cell-label"><fmt:message key="theEmployee" /></span>
                                   <!-- <span class="RequiredAstrik">*</span> -->
                                    <select class="select2 " id="corrStatus_Employee" multiple></select>
                                </div>
                                <div class="col-sm-2 col-xs-12 ">
										<span class="cell-label"><fmt:message key="reportType" /> </span>
										<div class="radio well">
											<label> <input type="radio" name="corrStatus_reportType" id="corrStatus_pdf" class="" value="1" checked="checked"><fmt:message key="pdf" />
											</label> <label> <input type="radio" name="corrStatus_reportType" id="corrStatus_excel" class="" value="2"><fmt:message key="excel" />
											</label>
										</div>
									</div> 
                                <div class="col-sm-2 col-sm-2 col-xs-12 marginTop">
                                    <button type="button" id="corrStatusReportBtn" class="btn btn-primary form-control"><i class="glyphicon glyphicon-search"></i><fmt:message key="reportView" /></button>
                                </div>                               
                                </div>
                                
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</fmt:bundle>