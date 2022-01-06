"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[968],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(a),d=i,u=k["".concat(c,".").concat(d)]||k[d]||h[d]||r;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2531:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return k}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={title:"How to Verify",sidebar_position:4},c="Verify the candidate version",s={unversionedId:"how-to-verify",id:"how-to-verify",title:"How to Verify",description:"For detailed check list, please refer to the official check list",source:"@site/community/how-to-verify.md",sourceDirName:".",slug:"/how-to-verify",permalink:"/community/how-to-verify",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/how-to-verify.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to Verify",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Release",permalink:"/community/how-to-release"},next:{title:"Overview",permalink:"/community/development_specification/overview"}},p=[{value:"1. Download the candidate version",id:"1-download-the-candidate-version",children:[],level:2},{value:"2. Verify that the uploaded version is compliant",id:"2-verify-that-the-uploaded-version-is-compliant",children:[{value:"2.1 Check whether the release package is complete",id:"21-check-whether-the-release-package-is-complete",children:[],level:3},{value:"2.2 Check gpg signature",id:"22-check-gpg-signature",children:[],level:3},{value:"2.3 Check sha512 hash",id:"23-check-sha512-hash",children:[],level:3},{value:"2.4. Check the file content of the source package",id:"24-check-the-file-content-of-the-source-package",children:[],level:3},{value:"2.5 Check the binary package",id:"25-check-the-binary-package",children:[],level:3}],level:2},{value:"3. Email reply",id:"3-email-reply",children:[],level:2}],h={toc:p};function k(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"verify-the-candidate-version"},"Verify the candidate version"),(0,r.kt)("p",null,"For detailed check list, please refer to the official ",(0,r.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"check list")),(0,r.kt)("h2",{id:"1-download-the-candidate-version"},"1. Download the candidate version"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Download the candidate version to be released to the local environment")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the network is poor, downloading may be time-consuming. The download is completed normally in about 20 minutes, please wait patiently."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#If there is svn locally, you can clone to the local\nsvn co https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/\n#or download the material file directly\nwget https://dist.apache.org/repos/dist/dev/incubator/linkis/${release_version}-${rc_version}/xxx.xxx\n\n")),(0,r.kt)("h2",{id:"2-verify-that-the-uploaded-version-is-compliant"},"2. Verify that the uploaded version is compliant"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Start the verification process, which includes but is not limited to the following content and forms")),(0,r.kt)("h3",{id:"21-check-whether-the-release-package-is-complete"},"2.1 Check whether the release package is complete"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The package uploaded to dist must include the source code package, and the binary package is optional")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Whether to include the source code package"),(0,r.kt)("li",{parentName:"ol"},"Whether to include the signature of the source code package"),(0,r.kt)("li",{parentName:"ol"},"Whether to include the sha512 of the source code package"),(0,r.kt)("li",{parentName:"ol"},"If the binary package is uploaded, also check the contents listed in (2)-(4)")),(0,r.kt)("h3",{id:"22-check-gpg-signature"},"2.2 Check gpg signature"),(0,r.kt)("p",null,"First import the publisher's public key. Import KEYS from the svn repository to the local environment. (The person who releases the version does not need to import it again, the person who helps to do the verification needs to import it, and the user name is enough for the person who issued the version)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import public key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://dist.apache.org/repos/dist/dev/incubator/linkis/KEYS> KEYS # Download KEYS\ngpg --import KEYS # Import KEYS to local\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trust the public key",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Trust the KEY used in this version")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    gpg --edit-key xxxxxxxxxx #KEY user used in this version\n    gpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\n    This is free software: you are free to change and redistribute it.\n    There is NO WARRANTY, to the extent permitted by law.\n    \n    Secret key is available.\n    gpg> trust #trust\n    Please decide how far you trust this user to correctly verify other users' keys\n    (by looking at passports, checking fingerprints from different sources, etc.)\n    \n      1 = I don't know or won't say\n      2 = I do NOT trust\n      3 = I trust marginally\n      4 = I trust fully\n      5 = I trust ultimately\n      m = back to the main menu\n    \n    Your decision? 5 #choose 5\n    Do you really want to set this key to ultimate trust? (y/N) y  #choose y\n                                                                \n    gpg>\n         \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the following command to check the signature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"  for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i; done\n  #or\n  gpg --verify apache-linkis-${release_version}-src.tar.gz.asc apache-linkis-${release_version}-src.tar.gz\n  # If you upload a binary package, you also need to check whether the signature of the binary package is correct\n  gpg --verify apache-linkis-${release_version}-bin.tar.gz.asc apache-linkis-${release_version}-bin.tar.gz\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"test result")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If something like the following appears, it means the signature is correct. Keyword: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Good signature"))),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'    apache-linkis-xxx-incubating-src.tar.gz\n    gpg: Signature made XXXX\n    gpg: using RSA key XXXXX\n    gpg: Good signature from "xxx @apache.org>"\n'))),(0,r.kt)("h3",{id:"23-check-sha512-hash"},"2.3 Check sha512 hash"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"After calculating the sha512 hash locally, verify that it is consistent with the dist. If you upload a binary package, you also need to check the sha512 hash of the binary package")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"macOS/Linux")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i; done\n#or\nfor i in *.tar.gz; do echo $i; shasum -a 512 $i; done\n\n#Compare the output content with the content of the apache-linkis-${release_version}-xxx.tar.gz.sha512 file\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Windows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ certUtil -hashfile apache-linkis-${release_version}-xxx.tar.gz SHA512\n#Compare the output content with the content of the apache-linkis-${release_version}-xxx.tar.gz.sha512 file\n")),(0,r.kt)("h3",{id:"24-check-the-file-content-of-the-source-package"},"2.4. Check the file content of the source package"),(0,r.kt)("p",null,"Unzip ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-linkis-${release_version}-src.tar.gz")," and check as follows:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check whether the source package contains unnecessary files, which makes the tar package too large"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Folder contains the word ",(0,r.kt)("inlineCode",{parentName:"li"},"incubating")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There are ",(0,r.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," files"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","There is a ",(0,r.kt)("inlineCode",{parentName:"li"},"DISCLAIMER")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"DISCLAIMER-WIP")," file"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The year in the ",(0,r.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Only text files exist, not binary files"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All files have ASF license at the beginning"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Able to compile correctly"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check for extra files or folders, such as empty folders, etc."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",".....")),(0,r.kt)("h3",{id:"25-check-the-binary-package"},"2.5 Check the binary package"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the binary package is uploaded, check the binary package.")),(0,r.kt)("p",null,"Unzip ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-linkis-${release_version}-src.tar.gz")," and check as follows:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Folder contains the word ",(0,r.kt)("inlineCode",{parentName:"p"},"incubating"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","There are ",(0,r.kt)("inlineCode",{parentName:"p"},"LICENSE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NOTICE")," files")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"DISCLAIMER")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DISCLAIMER-WIP")," file")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","The year in the ",(0,r.kt)("inlineCode",{parentName:"p"},"NOTICE")," file is correct")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","All text files have ASF license at the beginning")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Check the third-party dependent license:")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Compatible with third-party dependent licenses")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","All third-party dependent licenses are named in the ",(0,r.kt)("inlineCode",{parentName:"p"},"LICENSE")," file")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","If you are relying on the Apache license and there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"NOTICE")," file, then these ",(0,r.kt)("inlineCode",{parentName:"p"},"NOTICE")," files also need to be added to the version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NOTICE")," file")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","....."),(0,r.kt)("p",{parentName:"li"},"You can refer to this article: ",(0,r.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF Third Party License Policy")))),(0,r.kt)("h2",{id:"3-email-reply"},"3. Email reply"),(0,r.kt)("p",null,"If you initiate a posting vote, you can refer to this response example to reply to the email after verification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"+1 (xxxx)\nI checked:\n    1. All download links are valid\n    2. Checksum and signature are OK\n    3. LICENSE and NOTICE are exist\n    4. Build successfully on macOS(Big Sur)\n    5. ....\n")))}k.isMDXComponent=!0}}]);