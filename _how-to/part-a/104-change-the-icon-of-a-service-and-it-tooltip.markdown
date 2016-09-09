---
layout: recipe
permalink: /how-to/change-the-icon-of-a-service-and-it-tooltip/
title: 'Set the icon that represents a service'
category: '1. Part A'
sub-category: 'Service'
rate: '2'
number: '104'
introduction-text: ''
introduction-img: '103.png'
prevUrl: 103
nextUrl: 105
done: 'yes'
lang: en
ref: 104
---

The service icon is a [Font Awesome](http://fontawesome.io/cheatsheet/) character.

First check if the character you want to use for the icon exists (You can use the characters for which css classes have been defined here: [https://github.com/egovernment/eregistrations/blob/master/css/components/fa.css#L33-L378](https://github.com/egovernment/eregistrations/blob/master/css/components/fa.css#L33-L378) ).

If the character you want to use does not have it's css class defined, then create a pull-request in [eregistrations](https://github.com/egovernment/eregistrations) system.
In the comment write what Font Awesome character you would like to use.

From now on we assume that the icon (proper font character) already exists (the css class for it is defined i.e. 'fa fa-file').

First we need to adjust "My acount" page:

1. Open file `view/user.js`.
2. Find `exports._servicesBoxList` block.
3. Identify the `<i>` element inside `buttonContent` block.
4. Set `<i>` element's css class to the desired class e.g. ('fa fa-file').

After "My account" is updated we need to overwrite `getServiceIcon` method in view.
This method may or may not by already available in you system.

1. Open `view/components/business-process-table-columns.js` file (if there is no such file,
then your system is not up to date with current version, so you should create a pull request in your system to include new setup).
2. Look for the `getServiceIcon` method (It overrides the method from [eregistrations/view/components/business-process-table-columns](https://github.com/egovernment/eregistrations/blob/master/view/components/business-process-table-columns.js)).
If there is no such method, you will have to create it.
3. Create/Modify the `columns.getServiceIcon` method (`getServiceIcon` method takes `businessProcess` instance as an argument, and is expected to return an icon (`<i>` with chosen Font Awesome class name) that corresponds to provided `businesProcess`. The method needs to return correct icon (`<i>` element) for provided businessProcess).

---

## Example

In the branch "[change-the-icon-of-a-service](https://github.com/egovernment/eregistrations-demo/tree/change-the-icon-of-a-service)" of eregistrations-demo :

Change the icon of the "Demo" service. Use 'fa fa-file' as new icon classes.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-icon-of-a-service...change-the-icon-of-a-service-solution#files')">

<a name="diff-007c6d9af20c4ac6b837960b8d799a0b"></a>
<div id="diff-0" class="file js-details-container




             show-inline-notes
           ">
  <div class="file-header" data-path="view/components/business-process-table-columns.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/33bc3e61fe1381f23a1be60fd4c6ff626eca18b0/view/components/business-process-table-columns.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 33bc3e6 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="8 additions &amp; 1 deletion">9 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="view/components/business-process-table-columns.js">
        view/components/business-process-table-columns.js
      </span>

    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">

      <tbody><tr data-position="0">
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -1,6 +1,13 @@</td>
  </tr>

    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR1" data-line-number="1" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c">// Business process table columns global customization.</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR2" data-line-number="2" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR3" data-line-number="3" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL4" data-line-number="4" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-k">var</span> columns <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/components/business-process-table-columns<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> db      <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../db<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , columns <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/components/business-process-table-columns<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bL6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> columns;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">columns</span>.<span class="pl-en">getServiceIcon</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">businessProcess</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-k">if</span> (<span class="pl-smi">businessProcess</span>.<span class="pl-c1">constructor</span> <span class="pl-k">===</span> <span class="pl-smi">db</span>.<span class="pl-smi">BusinessProcessDemo</span>) {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">return</span> <span class="pl-en">i</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>fa fa-file<span class="pl-pds">"</span></span> });</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	}</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-007c6d9af20c4ac6b837960b8d799a0bR13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+};</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>


<a name="diff-ff399868a2b79a6fc5aa0b527b07d602"></a>
<div id="diff-1" class="file js-details-container




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

          <a href="/egovernment/eregistrations-demo/blob/33bc3e61fe1381f23a1be60fd4c6ff626eca18b0/view/user.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version 33bc3e6 ">View</a>


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
      <a href="#diff-ff399868a2b79a6fc5aa0b527b07d602" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/1262f42f7405ac992db007a61cd3825599bc6d80?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=36&amp;next_line_num_right=36&amp;path=view%2Fuser.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-35" data-right-range="1-35">
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

    <span class="blob-code-inner">-			<span class="pl-en">i</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>fa fa-<span class="x x-first x-last">user</span><span class="pl-pds">'</span></span> }), <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Register Demo<span class="pl-pds">"</span></span>)),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-ff399868a2b79a6fc5aa0b527b07d602R39" data-line-number="39" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+			<span class="pl-en">i</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>fa fa-<span class="x x-first x-last">file</span><span class="pl-pds">'</span></span> }), <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Register Demo<span class="pl-pds">"</span></span>)),</span>

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
     <a href="#diff-ff399868a2b79a6fc5aa0b527b07d602" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/1262f42f7405ac992db007a61cd3825599bc6d80?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=view%2Fuser.js&amp;prev_line_num_left=42&amp;prev_line_num_right=42" data-left-range="43-44" data-right-range="43-44">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>
</div>

</div>
