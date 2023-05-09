/*! For license information please see main.56034a5428a5bd4e291d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/lodash.js"),n=a("./app/pages/About/index.js"),i=a("./app/pages/Collections/index.js"),o=a("./app/pages/Detail/index.js"),c=a("./app/pages/Home/index.js"),r=a("./app/components/Preloader.js");new class{constructor(){this.createContent(),this.createPages(),this.createPreloader(),this.addLinkListeners()}createPreloader(){this.preloader=new r.default,this.preloader.once("completed",this.onPreloaded)}onPreloaded(){}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new n.default,collection:new i.default,detail:new o.default,home:new c.default},this.page=this.pages[this.template],this.page.create(),this.page.show(),this.addLinkListeners()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show()}else console.log("Error")}addLinkListeners(){const e=document.querySelectorAll("a");(0,s.each)(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"a61c3310007c220660c2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NjAzNGE1NDI4YTViZDRlMjkxZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVRBaUZBLElBMUVBLE1BQ0VBLGNBQ0VDLEtBQUtDLGdCQUNMRCxLQUFLRSxjQUNMRixLQUFLRyxrQkFDTEgsS0FBS0ksa0JBQ1AsQ0FFQUQsa0JBQ0VILEtBQUtLLFVBQVksSUFBSUMsRUFBQUEsUUFDckJOLEtBQUtLLFVBQVVFLEtBQUssWUFBYVAsS0FBS1EsWUFDeEMsQ0FFQUEsY0FFQSxDQUVBUCxnQkFDRUQsS0FBS1MsUUFBVUMsU0FBU0MsY0FBYyxZQUN0Q1gsS0FBS1ksU0FBV1osS0FBS1MsUUFBUUksYUFBYSxnQkFDNUMsQ0FFQVgsY0FDRUYsS0FBS2MsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFdBQVksSUFBSUMsRUFBQUEsUUFDaEJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUVadEIsS0FBS3VCLEtBQU92QixLQUFLYyxNQUFNZCxLQUFLWSxVQUM1QlosS0FBS3VCLEtBQUtDLFNBQ1Z4QixLQUFLdUIsS0FBS0UsT0FDVnpCLEtBQUtJLGtCQUNQLENBRUFzQixlQUFnQkMsU0FDUjNCLEtBQUt1QixLQUFLSyxPQUVoQixNQUFNQyxRQUFnQkMsT0FBT0MsTUFBTUosR0FFbkMsR0FBdUIsTUFBbkJFLEVBQVFHLE9BQWdCLENBQzFCLE1BQU1DLFFBQWFKLEVBQVFLLE9BQ3JCQyxFQUFNekIsU0FBUzBCLGNBQWMsT0FFbkNELEVBQUlFLFVBQVlKLEVBRWhCLE1BQU1LLEVBQWFILEVBQUl4QixjQUFjLFlBQ3JDWCxLQUFLWSxTQUFXMEIsRUFBV3pCLGFBQWEsaUJBQ3hDYixLQUFLUyxRQUFROEIsYUFBYSxnQkFBaUJ2QyxLQUFLWSxVQUNoRFosS0FBS1MsUUFBUTRCLFVBQVlDLEVBQVdELFVBRXBDckMsS0FBS3VCLEtBQU92QixLQUFLYyxNQUFNZCxLQUFLWSxVQUM1QlosS0FBS3VCLEtBQUtDLFNBQ1Z4QixLQUFLdUIsS0FBS0UsTUFDWixNQUNFZSxRQUFRQyxJQUFJLFFBRWhCLENBRUFyQyxtQkFDRSxNQUFNc0MsRUFBUWhDLFNBQVNpQyxpQkFBaUIsTUFFeENDLEVBQUFBLEVBQUFBLE1BQUtGLEdBQU9HLElBQ1ZBLEVBQUtDLFFBQVVDLElBQ2IsTUFBTSxLQUFFQyxHQUFTSCxFQUNqQkUsRUFBTUUsaUJBRU5qRCxLQUFLa0QsU0FBU0YsRUFBSyxDQUNwQixHQUVMLGtCQzdFRkcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgQWJvdXQgZnJvbSAncGFnZXMvQWJvdXQnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAncGFnZXMvQ29sbGVjdGlvbnMnXG5pbXBvcnQgRGV0YWlsIGZyb20gJ3BhZ2VzL0RldGFpbCdcbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUnXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlciAoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkKVxuICB9XG5cbiAgb25QcmVsb2FkZWQgKCkge1xuICAgIFxuICB9XG5cbiAgY3JlYXRlQ29udGVudCAoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcbiAgfVxuXG4gIGNyZWF0ZVBhZ2VzICgpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbjogbmV3IENvbGxlY3Rpb25zKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICAgIGhvbWU6IG5ldyBIb21lKClcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgICB0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXG4gICAgfVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycyAoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbm5ldyBBcHAoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTYxYzMzMTAwMDdjMjIwNjYwYzJcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiY3JlYXRlUHJlbG9hZGVyIiwiYWRkTGlua0xpc3RlbmVycyIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb24iLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJhc3luYyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=