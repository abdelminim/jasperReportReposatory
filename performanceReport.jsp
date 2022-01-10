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
                    <h5 style="padding-right: 12px"><fmt:message key="performanceReportAddedCorr" /></h5>
                </div>
            </div>
        </div>
        <div id="zcollapse1s" class="panel-collapse collapse in" aria-expanded="true">
            <div class="panel-body">
                <form id="performanceForm">
                    <div class="tab1">
                        <div class="col-xs-12">
                            <div class="row">
                                 <div class="col-sm-4 col-xs-12">
                                    <i class="glyphicon glyphicon-th-list"></i> <span class="cell-label"><fmt:message key="theDepartment" />
                                    <span class="RequiredAstrik">*</span></span>
                                    <select class="select2 validate[required]" id="performance_Department"  multiple></select>
                                </div>
                                <div class="col-sm-4 col-xs-12">
                                    <i class="glyphicon glyphicon-th-list"></i> <span class="cell-label"><fmt:message key="theEmployee" /></span>
                                   <!-- <span class="RequiredAstrik">*</span> -->
                                    <select class="select2 " id="performance_Employee" multiple></select>
                                </div>                                
                                </div>
                                <div class="row">                                      
                                	<div class="col-sm-4 col-xs-12">
										<i class="	glyphicon glyphicon-calendar"></i> <span
											class="cell-label"><fmt:message key="corrCreateDate" /></span>
										<div class="">
											<div class="col-sm-6 col-xs-12 has-cal">
												<div class="row">
													<div class="col-xs-1 NoPadding">
														<span class="cell-label"><fmt:message
																key="datefrom" /></span>
													</div>
													<div class="col-xs-11">
														<input type="text" id="performance_DateFrom"
															class="form-control popupDatepicker-ml "
															placeholder="yyyy/mm/dd">
													</div>
												</div>
											</div>
											<div class="col-sm-6 col-xs-12 has-cal">
												<div class="row">
													<div class="col-xs-1 NoPadding">
														<span class="cell-label"><fmt:message key="dateTo" /></span>
													</div>
													<div class="col-xs-11">
														<input type="text" id="performance_DateTo"
															class="form-control popupDatepicker-ml "
															placeholder="yyyy/mm/dd">
													</div>
												</div>
											</div>
										</div>
									</div>
									</div>
									<div class="row"> 
										<div class="col-sm-2 col-xs-12 ">
											<span class="cell-label"><fmt:message key="reportType" /> </span>
											<div class="radio well">
												<label> <input type="radio" name="performance_reportType" id="performance_pdf" class="" value="1" checked="checked"><fmt:message key="pdf" />
												</label> <label> <input type="radio" name="performance_reportType" id="performance_excel" class="" value="2"><fmt:message key="excel" />
												</label>
											</div>
										</div> 
		                                <div class="col-sm-2 col-sm-2 col-xs-12 marginTop">
		                                    <button type="button" id="performanceReportBtn" class="btn btn-primary form-control"><i class="glyphicon glyphicon-search"></i><fmt:message key="reportView" /></button>
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