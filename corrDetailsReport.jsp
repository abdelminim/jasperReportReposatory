<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="js/application/reportsControl.js"></script>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<fmt:setLocale value="${sessionScope.defaultLang}" />

<fmt:bundle basename="com.itblocks.cms.ui.message.message">
	<div class="newSend">
		<div class="col-xs-12 formTable NoPadding">
			<div class="TitlePanel">
				<div class="row MarginRow">
					<div class="col-sm-9 col-xs-12">
						<h5 style="padding-right: 12px">
							<fmt:message key="corrDetailsReport" />
						</h5>
					</div>
				</div>
			</div>
			<div id="zcollapse1s" class="panel-collapse collapse in"
				aria-expanded="true">
				<div class="panel-body">
					<form id="reqDetailsReportform">
						<div class="tab1">
							<div class="col-xs-12">
								<div class="row">
									<div
										class="col-md-3 col-sm-6 col-xs-12 Validation marginBottom">
										<i class="glyphicon glyphicon-pencil"></i> <span
											class="cell-label"><fmt:message key="corrNumber" /></span>
											<span class="RequiredAstrik"> *</span>
											 <input
											id="reqDReport_CorrNumber" class="form-control input validate[required]"
											type="text">
									</div>
									<div class="col-sm-2 col-xs-12 ">
										<span class="cell-label"><fmt:message key="reportType" /> </span>
										<div class="radio well">
											<label> <input type="radio" name="reqDReport_reportType" id="reqDReport_pdf" class="" value="1" checked="checked"><fmt:message key="pdf" />
											</label> <label> <input type="radio" name="reqDReport_reportType" id="reqDReport_excel" class="" value="2"><fmt:message key="excel" />
											</label>
										</div>
									</div>
									<div class="col-sm-2 col-sm-2 col-xs-12 CustommarginTop">
										<button type="button" id="reqDReportBtn"
											class="btn btn-primary form-control">
											<i class="glyphicon glyphicon-search"></i>
											<fmt:message key="reportView" />
										</button>
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