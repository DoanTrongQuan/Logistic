<template>
<ul class="nav nav-tabs nav-tabs-line yacr-ps-nav snipcss-pQIJr">
    <li data-ps="-1" class="active"> <a data-toggle="tab" data-yq-events="tToggleList(-1)" class=" waves-effect"><img yqrole="img" src="https://res.17track.net/global-v2/imgs/logo/svg/square_bot_128x90.svg?v=c2ee9cb16c" alt="17Track" data-yq-events="tToggleList(-1)"> <em data-yq-events="tToggleList(-1)">All</em> <span data-yq-events="tToggleList(-1)">(1)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 grey-900">All</p>
            <p>It indicates the current package status during transportation. You may refer to our status definition: <strong>Not Found / Info received / In Transit / Pick Up / Out for Delivery / Undelivered / Delivered / Alert / Expired</strong>. When tracking is completed, we will show the status according to all detailed tracking information.</p>
            <p>Given that the package status is auto-judged by the system, it's only for information reference use. Kindly note 17TRACK website/apps works as an interface with the actual carriers. It is the info they enter into their database that we can get and present to you. But we are not responsible in anyway for your shipment. In any instance, if the system gives you an incorrect package status, please don't hesitate to <a href="mailto:serv@17track.net">contact us</a>.</p>
        </div>
    </li>
    <li data-ps="00" data-psbdclass="ps-bdcolor-00"><a data-yq-events="tToggleList(00)" class="ps-color-00 no-max-width waves-effect" data-toggle="tab"><i data-yq-events="tToggleList(00)" class="icon fa-PS_00"></i> <em data-yq-events="tToggleList(00)">Not found</em> <span data-yq-events="tToggleList(00)">(0)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 ps-color-00">Not found</p>
            <p class="font-weight-500 grey-900">Your package is not found at this moment on the carrier's website, If necessary, please verify with the package sender and check back later.</p>
            <p>General explanation:</p>
            <ol>
                <li>The carrier hasn't accepted your package yet.</li>
                <li>The carrier hasn't scanned and entered tracking information for your package yet.</li>
                <li>Your tracking number is incorrect or invalid.</li>
                <li>The item was posted a long time ago, info not available anymore.</li>
            </ol>
            <p>Generally, after the sender ships your package, it will be processed by the carrier, then they scan and enter the tracking information. There might be a delay between these scanning events and tracking availability in their system. Usually it takes a few days for processing, therefore the tracking information may not appear online immediately, please try to track again later.</p>
        </div>
    </li>
    <li data-ps="05" data-psbdclass="ps-bdcolor-05"><a data-yq-events="tToggleList(05)" class="ps-color-05 no-max-width waves-effect" data-toggle="tab"><i data-yq-events="tToggleList(05)" class="icon fa-PS_05"></i> <em data-yq-events="tToggleList(05)">Info received</em> <span data-yq-events="tToggleList(05)">(0)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 ps-color-05">Info received</p>
            <p class="font-weight-500 grey-900">Your package is waiting to be picked up by the carrier.</p>
            <p>General explanation:</p>
            <ol> </ol>
            <p>The shipping order has been placed and sent to the carrier, waiting to be collected for transport. If the transport hasn't started for a long time, we suggest that you contact the carrier for advice.</p>
        </div>
    </li>
    <li data-ps="10" data-psbdclass="ps-bdcolor-10"><a data-yq-events="tToggleList(10)" class="ps-color-10 no-max-width waves-effect" data-toggle="tab"><i data-yq-events="tToggleList(10)" class="icon fa-PS_10"></i> <em data-yq-events="tToggleList(10)">In transit</em> <span data-yq-events="tToggleList(10)">(1)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 ps-color-10">In transit</p>
            <p class="font-weight-500 grey-900">Your package has shipped from the originating country and is en route to its destination.</p>
            <p>General explanation:</p>
            <ol>
                <li>Your package has been handed over to the carrier.</li>
                <li>Your package has been dispatched or departed from its country of origin.</li>
                <li>Your package has arrived its destination country and pending customs inspection.</li>
                <li>Your package has arrived its destination country and during domestic transportation.</li>
                <li>Your package is under another transportation period. For instance, it's in another country as a transit point and will be forwarded from there to its final destination country.</li>
            </ol>
            <p>Please pay attention to detailed tracking information, if your item has arrived its destination country, we'd advise you to track it again within 1-2 days and observe the latest updates to ensure a smooth receipt of the package.</p>
        </div>
    </li>
    <li data-ps="30" data-psbdclass="ps-bdcolor-30"><a data-yq-events="tToggleList(30)" class="ps-color-30 no-max-width waves-effect" data-toggle="tab"><i data-yq-events="tToggleList(30)" class="icon fa-PS_30"></i> <em data-yq-events="tToggleList(30)">Pick up</em> <span data-yq-events="tToggleList(30)">(0)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 ps-color-30">Pick up</p>
            <p class="font-weight-500 grey-900">Your package has arrived at a nearby pick-up point. Please pick it up soon to avoid being returned.</p>
            <p>General explanation:</p>
            <ol> </ol>
            <p>The carrier has collection deadline, we'd advise you pickup your package at once, or it might be returned to the sender.If you ensure your package has been delivered successfully, please ignore this notice.</p>
        </div>
    </li>
    <li data-ps="32" data-psbdclass="ps-bdcolor-32"><a data-yq-events="tToggleList(32)" class="ps-color-32 no-max-width waves-effect" data-toggle="tab"><i data-yq-events="tToggleList(32)" class="icon fa-PS_32"></i> <em data-yq-events="tToggleList(32)">Out for Delivery</em> <span data-yq-events="tToggleList(32)">(0)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 ps-color-32">Out for Delivery</p>
            <p class="font-weight-500 grey-900">Your package is out for delivery.</p>
            <p>General explanation:</p>
            <ol> </ol>
            <p>The carrier is on its way to deliver the shipment, please keep your contact unblocked to avoid returned packages due to failed delivery. If you haven't received your package yet, we suggest you contact the carrier to arrange for redelivery of your package.</p>
        </div>
    </li>
    <li data-ps="35" data-psbdclass="ps-bdcolor-35"><a data-yq-events="tToggleList(35)" class="ps-color-35 no-max-width waves-effect" data-toggle="tab"><i data-yq-events="tToggleList(35)" class="icon fa-PS_35"></i> <em data-yq-events="tToggleList(35)">Undelivered</em> <span data-yq-events="tToggleList(35)">(0)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 ps-color-35">Undelivered</p>
            <p class="font-weight-500 grey-900">Your package was attempted for delivery but failed, this may due to several reasons. Please contact the carrier for clarification.</p>
            <p>General explanation:</p>
            <ol>
                <li>Possible reasons for unsuccessful item delivery attempt: addressee not available at the time of delivery; delivery delayed and rescheduled, addressee requested later delivery, address problem - unable to locate premises, rural or remote areas, etc.</li>
            </ol>
            <p>If you ensure your package has been delivered successfully, please ignore this notice. However, if you haven't received your package, we'd advise you to contact the carrier to arrange a re-delivery or collect your item. Hint: Generally, the carrier has collection deadline, we'd advise you pickup your package at once, or it might be returned to the sender.</p>
        </div>
    </li>
    <li data-ps="40" data-psbdclass="ps-bdcolor-40"><a data-yq-events="tToggleList(40)" class="ps-color-40 no-max-width waves-effect" data-toggle="tab"><i data-yq-events="tToggleList(40)" class="icon fa-PS_40"></i> <em data-yq-events="tToggleList(40)">Delivered</em> <span data-yq-events="tToggleList(40)">(0)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 ps-color-40">Delivered</p>
            <p class="font-weight-500 grey-900">Your package was delivered successfully to the addressee.</p>
            <p>General explanation:</p>
            <ol> </ol>
            <p>Under most circumstances, the delivered status indicates that the carrier has delivered this package successfully. If the addressee didn't receive it, we'd advise you to contact the package sender or shipping carrier for clarification.</p>
        </div>
    </li>
    <li data-ps="50" data-psbdclass="ps-bdcolor-50"><a data-yq-events="tToggleList(50)" class="ps-color-50 no-max-width waves-effect" data-toggle="tab"><i data-yq-events="tToggleList(50)" class="icon fa-PS_50"></i> <em data-yq-events="tToggleList(50)">Alert</em> <span data-yq-events="tToggleList(50)">(0)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 ps-color-50">Alert</p>
            <p class="font-weight-500 grey-900">Your package might undergo unusual shipping condition, this may due to several reasons, most likely package was returned to sender, customs issue, lost, damaged etc.</p>
            <p>General explanation:</p>
            <ol>
                <li>Your package is being returned to sender due to any of these reasons: package refused by addressee; incorrect / illegible / incomplete address; expired retention period; addressee absence; etc.</li>
                <li>Your package might be retained by customs department due to any of these reasons: contains prohibited goods; importation of the goods is restricted; retained by customs due to tax payable, or any other unspecified reasons.</li>
                <li>Your package may have suffered damage or been lost during the transportation period.</li>
            </ol>
            <p>If you ensure your package has been delivered successfully, please ignore this notice. However, if you haven't received your package and it is under the'Alert' status, then please pay attention: you need to read and analyze the detailed tracking information carefully. Due to complex description of worldwide shipping providers, we can't auto-detect and determine all the status 100% accurately, hope you understand. We'd advise you to contact the package sender or your shipping carrier for clarification.</p>
        </div>
    </li>
    <li data-ps="20" data-psbdclass="ps-bdcolor-20"><a data-yq-events="tToggleList(20)" class="ps-color-20 no-max-width waves-effect" data-toggle="tab"><i data-yq-events="tToggleList(20)" class="icon fa-PS_20"></i> <em data-yq-events="tToggleList(20)">Expired</em> <span data-yq-events="tToggleList(20)">(0)</span></a>
        <div class="webui-popover-content">
            <p class="text-capitalize font-weight-500 ps-color-20">Expired</p>
            <p class="font-weight-500 grey-900">Your package was in transportation period for a long time still has no delivered results.</p>
            <p>General explanation:</p>
            <ol>
                <li>At a certain stage during transportation, the carrier has not updated the tracking information due to the high volume of postage.</li>
                <li>The carrier was omitted to enter the tracking information.</li>
                <li>Your package may have been lost during the transportation period.</li>
            </ol>
            <p>If you ensure your package has been delivered successfully, please ignore this notice. However, if you haven't received your package, please pay attention, we'd advise you to contact the package sender or your shipping carrier for clarification.</p>
        </div>
    </li>
</ul>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap'); 
@font-face { 
  font-family:'17icon';
  font-style:normal;
  font-weight:400;
  src:url(https://res.17track.net/asset/fonts/common/common/common.eot?v=5e46080d7f);
  src:url(https://res.17track.net/asset/fonts/common/common/common.eot?v=5e46080d7f#iefix) format('embedded-opentype'),url(https://res.17track.net/asset/fonts/common/common/common.woff?v=a1621cc15d) format('woff'),url(https://res.17track.net/asset/fonts/common/common/common.ttf?v=f330d4dec4) format('truetype'),url(https://res.17track.net/asset/fonts/common/common/common.svg?v=edbdaa10b7#17icon) format('svg');
} 
  body {  
    background:#f3f4f5;
    font-family:sans-serif;
    font-size:10px;
    line-height:1.57142857;
    color:#757575;
    font-weight:400;
  }  
* { 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
} 

body { 
    margin: 0;
} 

body { 
    font-family: -apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,Segoe UI,Arial,Roboto,'PingFang SC',miui,'Hiragino Sans GB',"Microsoft Yahei",sans-serif; 
    font-size: 14px; 
    line-height: 1.57142857; 
    color: #757575; 
    background-color: #fff;
} 

body { 
    font-weight: 400;
} 

body { 
    height: 100%;
} 

body { 
    padding-top: 66px;
} 

body { 
    padding: 0;
} 

body { 
    -ms-overflow-style: scrollbar;
} 

html { 
    font-family: sans-serif; 
    -webkit-text-size-adjust: 100%; 
    -ms-text-size-adjust: 100%;
} 

html { 
    font-size: 10px; 
    -webkit-tap-highlight-color: rgba(0,0,0,0);
} 

html { 
    height: 100%;
} 

html { 
    -ms-overflow-style: scrollbar;
} 

ul { 
    margin-top: 0; 
    margin-bottom: 11px;
} 

.nav { 
    padding-left: 0; 
    margin-bottom: 0; 
    list-style: none;
} 

.nav-tabs { 
    border-bottom: 1px solid #e0e0e0;
} 

.nav-tabs-line { 
    position: relative;
} 

.yacr-ps-nav { 
    display: -webkit-box; 
    display: -moz-box; 
    display: -ms-flexbox;
} 

.yacr-ps-nav { 
    display: flex; 
    -webkit-box-flex: 1; 
    -moz-box-flex: 1; 
    -ms-flex: 1 1 auto; 
    flex: 1 1 auto; 
    border: none;
} 

:after,:before { 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
} 

.btn-group-vertical > .btn-group::after, .btn-group-vertical > .btn-group::before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before, .dl-horizontal dd::after, .dl-horizontal dd::before, .form-horizontal .form-group::after, .form-horizontal .form-group::before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before { 
    display: table; 
    content: " ";
} 

.btn-group-vertical > .btn-group::after, .btn-group-vertical > .btn-group::before, .btn-toolbar::after, .btn-toolbar::before, .clearfix::after, .clearfix::before, .container-fluid::after, .container-fluid::before, .container::after, .container::before, .dl-horizontal dd::after, .dl-horizontal dd::before, .form-horizontal .form-group::after, .form-horizontal .form-group::before, .modal-footer::after, .modal-footer::before, .modal-header::after, .modal-header::before, .nav::after, .nav::before, .navbar-collapse::after, .navbar-collapse::before, .navbar-header::after, .navbar-header::before, .navbar::after, .navbar::before, .pager::after, .pager::before, .panel-body::after, .panel-body::before, .row::after, .row::before { 
    display: table; 
    content: " ";
} 

.btn-group-vertical > .btn-group::after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after, .dl-horizontal dd::after, .form-horizontal .form-group::after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after { 
    clear: both;
} 

.nav > li  { 
    position: relative; 
    display: block;
} 

.nav-tabs > li { 
    float: left; 
    margin-bottom: -1px;
} 

.yacr-ps-nav > li { 
    float: none;
} 

a { 
    background-color: transparent;
} 

a { 
    color: #002e87; 
    text-decoration: none;
} 

.waves-effect { 
    position: relative; 
    z-index: 1; 
    display: inline-block; 
    overflow: hidden; 
    cursor: pointer; 
    -webkit-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 
    -webkit-tap-highlight-color: transparent;
} 

.nav > li > a  { 
    position: relative; 
    display: block; 
    padding: 10px 15px;
} 

.nav-tabs > li > a { 
    margin-right: 2px; 
    line-height: 1.57142857; 
    border: 1px solid transparent; 
    border-radius: 3px 3px 0 0;
} 

.nav > li > a  { 
    overflow: hidden;
} 

.nav-tabs > li > a { 
    padding: 10px 20px; 
    color: #757575; 
    -webkit-transition: .25s; 
    -o-transition: .25s; 
    transition: .25s;
} 

.nav-tabs-line > li > a { 
    padding: 10px 20px; 
    border-bottom: 2px solid transparent;
} 

.yacr-ps-nav > li > a { 
    display: -webkit-box; 
    display: -moz-box; 
    display: -ms-flexbox; 
    display: flex; 
    -webkit-box-align: center; 
    -moz-box-align: center; 
    -ms-flex-align: center; 
    align-items: center; 
    -ms-flex-wrap: nowrap; 
    flex-wrap: nowrap; 
    height: 62px; 
    padding: 18px 10px; 
    border-width: 0 0 2px; 
    max-width: 135px;
} 

.nav-tabs > li.active > a { 
    color: #001f7b; 
    cursor: default; 
    background-color: #fff; 
    border: 1px solid #e0e0e0; 
    border-bottom-color: transparent;
} 

.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover { 
    color: #fff; 
    background-color: #003a9b; 
    border-color: transparent; 
    border-bottom-color: #003a9b;
} 

.nav-tabs-line > li.active > a { 
    color: #003a9b; 
    background-color: transparent; 
    border-bottom: 2px solid transparent;
} 

.nav-tabs-line > li.active > a, .nav-tabs-line > li.active > a:focus, .nav-tabs-line > li.active > a:hover { 
    border-bottom-color: #003a9b!important;
} 

.yacr-ps-nav > li.active a { 
    border-width: 0 0 2px;
} 

.yacr-ps-nav > li.active[data-ps="-1"] > a { 
    border-bottom-color: #003a9b;
} 

a:active,a:hover { 
    outline: 0;
} 

a:hover { 
    color: #003a9b; 
    text-decoration: underline;
} 

 .nav > li > a:hover { 
    text-decoration: none; 
    background-color: #eee;
} 

.nav-tabs > li > a:hover { 
    border-color: transparent transparent #e0e0e0;
} 

 .nav-tabs-line > li > a:hover { 
    background-color: transparent;
} 

 .nav-tabs-line > li > a:hover { 
    border-bottom-color: #bdbdbd;
} 

.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover { 
    color: #001f7b; 
    cursor: default; 
    background-color: #fff; 
    border: 1px solid #e0e0e0; 
    border-bottom-color: transparent;
} 

.nav-tabs-line > li.active > a, .nav-tabs-line > li.active > a:focus, .nav-tabs-line > li.active > a:hover { 
    color: #003a9b; 
    background-color: transparent; 
    border-bottom: 2px solid transparent;
} 

.yacr-ps-nav > li.active a, .yacr-ps-nav > li.active:focus a, .yacr-ps-nav > li.active:hover a { 
    border-width: 0 0 2px;
} 

.webui-popover-content { 
    padding: 20px; 
    overflow: auto;
} 

.yacr-ps-nav > li > a + .webui-popover-content { 
    display: none;
} 

.ps-color-00 { 
    color: #757575!important;
} 

.yacr-ps-nav > li .no-max-width { 
    max-width: 100%;
} 

.nav > li > a:focus, .nav > li > a:hover { 
    text-decoration: none; 
    background-color: #eee;
} 

.nav-tabs-line > li > a:focus, .nav-tabs-line > li > a:hover { 
    background-color: transparent;
} 

.ps-color-05 { 
    color: #00bcd4!important;
} 

.ps-color-10 { 
    color: #2196f3!important;
} 

.ps-color-30 { 
    color: #0d47a1!important;
} 

.ps-color-32 { 
    color: #2962ff!important;
} 

.ps-color-35 { 
    color: #f44336!important;
} 

.ps-color-40 { 
    color: #43a047!important;
} 

.ps-color-50 { 
    color: #ff6f00!important;
} 

.ps-color-20 { 
    color: #b71c1c!important;
} 

img { 
    border: 0;
} 

img { 
    vertical-align: middle;
} 

.nav > li > a > img  { 
    max-width: none;
} 

.yacr-ps-nav > li > a img { 
    margin-right: 3px; 
    width: 24px; 
    height: 24px; 
    vertical-align: middle;
} 

.yacr-ps-nav > li > a em { 
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;
} 

.yacr-ps-nav > li > a em { 
    text-transform: capitalize; 
    font-style: normal;
} 

p { 
    margin: 0 0 11px;
} 

.text-capitalize { 
    text-transform: capitalize;
} 

.text-capitalize { 
    text-transform: capitalize!important;
} 

.font-weight-500 { 
    font-weight: 500!important;
} 

.grey-900 { 
    color: #212121!important;
} 

.icon { 
    position: relative; 
    display: inline-block; 
    font-style: normal; 
    font-weight: 400; 
    line-height: 1; 
    -webkit-transform: translate(0,0); 
    -ms-transform: translate(0,0); 
    -o-transform: translate(0,0); 
    transform: translate(0,0); 
    text-rendering: auto; 
    speak: none; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
} 

[class*="fa-"] { 
    position: relative; 
    display: inline-block; 
    font-family: '17icon'; 
    font-style: normal; 
    font-weight: 400; 
    line-height: 1; 
    -webkit-transform: translate(0,0); 
    -ms-transform: translate(0,0); 
    -o-transform: translate(0,0); 
    transform: translate(0,0); 
    text-rendering: auto; 
    speak: none; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
} 

.nav-tabs > li > a > .icon { 
    margin-right: .5em; 
    line-height: 1;
} 

.yacr-ps-nav > li > a .icon { 
    margin-right: 3px; 
    vertical-align: middle; 
    font-size: 24px;
} 

.fa-PS_00:before { 
    content: "\b000";
} 

.yacr-ps-nav > li > a em, .yqc-item .body, .yqc-item .country, .yqc-item .name, .yqcr-only-phone .yqcr-transit > div .base-info > div > i, .yqcr-only-phone .yqcr-transit > div .base-info > div > span, .yqcr-ps [data-name] > p:nth-child(1) span, .yqcr-ps [data-name] > p:nth-child(2), .yqcr-transit-mid > div .base-info, .yqcr-transit-mid > div .base-info > div i, .yqcr-transit-mid > div .base-info > div span, .yqcr-transit > div .base-info, .yqcr-transit > div .base-info > div { 
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;
} 

ol { 
    margin-top: 0; 
    margin-bottom: 11px;
} 

ol  { 
    margin-bottom: 0;
} 

.fa-PS_05:before { 
    content: "\b005";
} 

.fa-PS_10:before { 
    content: "\b010";
} 

.fa-PS_30:before { 
    content: "\b030";
} 

.fa-PS_32:before { 
    content: "\b032";
} 

.fa-PS_35:before { 
    content: "\b035";
} 

.fa-PS_40:before { 
    content: "\b040";
} 

.fa-PS_50:before { 
    content: "\b050";
} 

a:hover { 
    outline: 0;
} 

.fa-PS_20:before { 
    content: "\b020";
} 

strong { 
    font-weight: 700;
} 

strong { 
    font-weight: 500;
} 



</style>