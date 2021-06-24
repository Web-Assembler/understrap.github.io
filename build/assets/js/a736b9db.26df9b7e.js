(self.webpackChunkunderstrap_github_io=self.webpackChunkunderstrap_github_io||[]).push([[73],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4232:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},p="Installation",s={unversionedId:"understrap-parent/intro",id:"understrap-parent/intro",isDocsHomePage:!1,title:"Installation",description:"There are four ways to install UnderStrap: Via WordPress theme installer, via ZIP upload, via SFTP or with Git & npm.",source:"@site/docs/understrap-parent/intro.md",sourceDirName:"understrap-parent",slug:"/understrap-parent/intro",permalink:"/understrap-parent/intro",editUrl:"https://github.com/understrap/understrap-docs/edit/master/website/docs/understrap-parent/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Theme Structure",permalink:"/understrap-parent/theme-structure"}},u=[{value:"1. Installation via WordPress theme installer",id:"1-installation-via-wordpress-theme-installer",children:[]},{value:"2. Installation via Upload",id:"2-installation-via-upload",children:[]},{value:"3. Manually via SFTP",id:"3-manually-via-sftp",children:[]},{value:"4. Install via Git and npm",id:"4-install-via-git-and-npm",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"There are four ways to install UnderStrap: Via WordPress theme installer, via ZIP upload, via SFTP or with Git & npm."),(0,i.kt)("h2",{id:"1-installation-via-wordpress-theme-installer"},"1. Installation via WordPress theme installer"),(0,i.kt)("p",null,"UnderStrap is available via ",(0,i.kt)("a",{parentName:"p",href:"https://wordpress.org/themes/understrap/"},"wordpress.org"),". Means you can install it from your WordPress backend as any other theme, too."),(0,i.kt)("p",null,"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Appearance -> Themes"),' in your WordPress backend, hit the "Add New" button and search for "UnderStrap". Hit the "install" button and wait a moment. UnderStrap will be installed on your server. Now activate UnderStrap. Go again to ',(0,i.kt)("inlineCode",{parentName:"p"},"Appearance -> Themes"),' and hit the "Activate" button below the UnderStrap screenshot.'),(0,i.kt)("h2",{id:"2-installation-via-upload"},"2. Installation via Upload"),(0,i.kt)("p",null,"UnderStrap is available as .zip archive at ",(0,i.kt)("a",{parentName:"p",href:"https://understrap.com"},"UnderStrap.com"),". Download it and store it on your local HDD."),(0,i.kt)("p",null,"Open your WordPress backend and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Appearance -> Themes"),', hit the "Add New" button followed by the "Upload Theme" button.'),(0,i.kt)("p",null,"Select the previously stored .zip file from your HDD and upload it. The WordPress install routine will run automatically right after it."),(0,i.kt)("h2",{id:"3-manually-via-sftp"},"3. Manually via SFTP"),(0,i.kt)("p",null,"Follow step 2 but extract the freshly downloaded understrap.zip file on your local HDD. Now connect via SFTP to your server, browse to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/wp-content/themes")," directory of your WordPress installation and upload the ",(0,i.kt)("inlineCode",{parentName:"p"},"/understrap")," folder to it."),(0,i.kt)("h2",{id:"4-install-via-git-and-npm"},"4. Install via Git and npm"),(0,i.kt)("p",null,"Open your terminal and browse to the location where you want to install UnderStrap:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cd path/to/location/")),(0,i.kt)("p",null,"If needed create the proper folder:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mkdir understrap ")),(0,i.kt)("p",null,"Now pull in UnderStrap via GitHub with:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/understrap/understrap.git")),(0,i.kt)("p",null,"At the end install all dependencies by this command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm install")))}c.isMDXComponent=!0}}]);