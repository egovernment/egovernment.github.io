---
layout: recipe
permalink: /how-to/change-the-name-of-a-service/
title: 'Change name of a service on My Account homepage'
category: '1. Part A'
sub-category: 'Service'
rate: '1'
number: '101'
introduction-text: 'This recipe explains how to change the name of a service on the My Account homepage.'
introduction-img: '101.png'
prevUrl: 
nextUrl: /how-to/change-the-description-of-a-service-from-my-account/
done: 'yes'
---

1. Open file `view/user.js`
2. In a `exports._servicesBoxList` block (it's responsible for "Available Services") find name of service which should be changed and update it.

---

## Example

__Starting Branch: [change-the-name-of-the-service](https://github.com/egovernment/eregistrations-demo/tree/change-the-name-of-the-service)__

Let's change the name of the service from `Register Demo` to `Register company`

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-the-service...change-the-name-of-the-service-solution#files')">
      
<a name="diff-ff399868a2b79a6fc5aa0b527b07d602"></a>
<div id="diff-0" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="view/user.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/7a66dda3ef7d1267950dd1af9308a3349ad83ab2/view/user.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 7a66dda ">View</a>

          <a class="btn-octicon tooltipped tooltipped-nw" href="github-mac://openRepo/https://github.com/egovernment/eregistrations-demo?branch=change-the-name-of-the-service-solution&amp;filepath=view%2Fuser.js" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop, type:mac">
              <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
          </a>

    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="view/user.js">
        view/user.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-ff399868a2b79a6fc5aa0b527b07d602" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/3eeb571f0c015deb2425d192a38e1d9b84d62c1d?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=36&amp;next_line_num_right=36&amp;path=view%2Fuser.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-35" data-right-range="1-35">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -36,7 +36,7 @@ exports._servicesBoxList = function () {</td>
  </tr>

    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L36" data-line-number="36" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R36" data-line-number="36" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-k">return</span> [{</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L37" data-line-number="37" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R37" data-line-number="37" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		actionUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/register-as-demo/<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L38" data-line-number="38" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R38" data-line-number="38" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		buttonContent<span class="pl-k">:</span>  <span class="pl-en">div</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>user-account-service-button<span class="pl-pds">'</span></span> },</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L39" data-line-number="39" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-			<span class="pl-en">i</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>fa fa-user<span class="pl-pds">'</span></span> }), <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Register <span class="x x-first x-last">Demo</span><span class="pl-pds">"</span></span>)),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R39" data-line-number="39" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+			<span class="pl-en">i</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>fa fa-user<span class="pl-pds">'</span></span> }), <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Register <span class="x x-first x-last">company</span><span class="pl-pds">"</span></span>)),</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R40" data-line-number="40" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		content<span class="pl-k">:</span> <span class="pl-en">span</span>(<span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Short description of demo registration process<span class="pl-pds">"</span></span>)),</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L41" data-line-number="41" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R41" data-line-number="41" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		disabledCondition<span class="pl-k">:</span> <span class="pl-en">gtOrEq</span>(<span class="pl-en">getSelectedBusinessProcesses</span>(<span class="pl-v">this</span>.<span class="pl-smi">user</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602L42" data-line-number="42" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R42" data-line-number="42" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 			<span class="pl-smi">db</span>.<span class="pl-smi">BusinessProcessDemo</span>).<span class="pl-smi">_size</span>, <span class="pl-c1">5</span>)</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-ff399868a2b79a6fc5aa0b527b07d602" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/3eeb571f0c015deb2425d192a38e1d9b84d62c1d?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=view%2Fuser.js&amp;prev_line_num_left=42&amp;prev_line_num_right=42" data-left-range="43-44" data-right-range="43-44">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
