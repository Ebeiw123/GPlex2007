// ==UserScript==
// @name        GPlex 2007 Basic Buttons
// @namespace	Violentmonkey Scripts
// @match       https://www.google.com/*
// @icon        data:image/ico;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8A//3/AP39/wD6/f8A+P3/AP/8/wD9/P8A+vz/AP/7/wD/+v8A/vr/APz6/wD4+v8A+/n/APP5/wD/+P8A+vj/AO/4/wDm+P8A2fj/AP/3/wD/9v8A9vb/AP/1/wD69f8A9PT/AO30/wD/8/8A//L/APnx/wD28P8A///+APj//gD2//4A9P/+AOP//gD//f4A6f/9AP///AD2//wA8//8APf9/AD///sA/v/7AOD/+wD/+vsA9/X7APr/+gDv/voA///5AP/9+QD/+/kA+e35AP//+ADm//gA4f/4AP/9+AD0+/gA///3APv/9wDz//cA8f/3AO3/9wD/8fcA//32AP369gDr+vYA8f/1AOv/9QD/+/UA///0APP/9ADq//QA///zAP/18wD///IA/fzyAP//8QD///AA9//wAPjw8AD//+8A8//vAP//7gD9/+4A9v/uAP/u7gD//+0A9v/tAP7/6wD/+eoA///pAP//6AD2/+gA//nnAP/45wD38eYA/fblAP/25AD29uQA7N/hAPzm4AD/690AEhjdAAAa3AAaJdsA//LXAC8g1gANH9YA+dnTAP/n0gDh5dIADyjSABkk0gAdH9EABxDRAP/l0AAAJs4AGRTOAPPczQAAKs0AIi7MAA4UywD56soA8tPKANTSygD/18kA6NLHAAAjxwDj28QA/s7CAP/1wQDw3r8A/9e8APrSrwDCtqoAzamjANmPiQDQj4YA35mBAOmefgDHj3wA1qR6AO+sbwDpmm8A2IVlAKmEYgCvaFoAvHNXAEq2VgA5s1UAPbhQAFWtTwBStU0ARbNNAEGxTQA7tEwAObZIAEq5RwDKdEYAULhDANtuQgBEtTwA1ls3ALhgMQCxNzEA2FsvAEC3LQB0MCkAiyYoANZTJwDLWyYAtjMlALE6JACZNSMAuW4iANlgIgDoWCEAylwgAMUuIAD3Vh8A52gdALRCHQCxWhwAsEkcALU4HACMOBwA0V4bAMYyGgCPJRoA218ZAJM7FwC/PxYA0msVAM9jFQD2XBUAqioVAIAfFQDhYRQAujMTAMUxEwCgLBMAnxIPAMsqDgCkFgsA6GMHALE2BAC9JQAAliIAAFYTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AsbGxsbGxsbGxsbGxsbGxd7IrMg8PDw8PDw8PUBQeJXjQYE9PcKPM2NfP2sWhcg+BzTE7dLjbmG03YWaV4JYye8MPbsLZlEouKRRCg9SXMoW/U53enGRAFzCRtNO7mTiAyliw30gRTg9VbJCKfYs0j9VmuscfLTFbIy8SOhA0Inq5Y77GNBMYIxQUJzM2Vxx2wEmfyCYWMRldXCg5MU0aicRUms58SUVeRkwjPBRSNIfBMkSgvWkyPxVHFIaMSx1/0S9nkq7WdWo1a43Jt2UqgtJERGJ5m6K8y92znpNWIYS1UQ89Mmg5cXNaX0EkGyyI3KSsp6mvpaqosaatq7axsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
// @grant       none
// @version     1.0
// @author      -
// @description 7/31/2026, 11:38:54 AM
// ==/UserScript==

function waitForElement(selector, callback) {
    const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
            clearInterval(interval);
            callback(element);
        }
    }, 100); // Check every 100ms
}

const cssStyle = `button.searchbtn {
	all: revert;
	font-size: 13px;
	height: 22px; !important;
	margin: 0px;
}
button.searchbtn-small {
	all: revert;
	font-size: 13px;
  margin-top: -5px;
  margin-left: 11px;
}
#ugf-hp-buttons-row {
	margin-top: 0 !important;
}
#ugf-hp-buttons {
	height: 38px;
}
#ugf-search-btn, #ugf-search-btn-2, #ugf-lucky-btn {
	display: none !important;
}
#ugf-top #ugf-searchbar::after {
  left: 375px;
}`;
waitForElement("head", function(){
  const styleElem = document.createElement("style");
  styleElem.innerText = cssStyle;
  document.head.appendChild(styleElem);
});

if (window.location.pathname === "/search") {
  waitForElement("#ugf-search", function(){
    const searchBar = document.querySelector("#ugf-search");
    const sBtn = document.createElement("button");
    sBtn.classList.add("searchbtn-small");
    sBtn.addEventListener("click", ()=>{document.querySelector("#ugf-search-btn").click()});
    sBtn.innerText = "Search";
    searchBar.appendChild(sBtn);
  });
} else {
  waitForElement("#ugf-hp-buttons", function(){
    const btnRow = document.querySelector("#ugf-hp-buttons");

    const gsBtn = document.createElement("button");
    gsBtn.classList.add("searchbtn");
    gsBtn.addEventListener("click", ()=>{document.querySelector("#ugf-search-btn-2").click()});
    gsBtn.innerText = "Google Search";

    const iflBtn = document.createElement("button");
    iflBtn.classList.add("searchbtn");
    iflBtn.addEventListener("click", ()=>{document.querySelector("#ugf-lucky-btn").click()});
    iflBtn.innerText = "I'm Feeling Lucky";

    btnRow.appendChild(gsBtn);
    btnRow.appendChild(iflBtn);
  });
};
