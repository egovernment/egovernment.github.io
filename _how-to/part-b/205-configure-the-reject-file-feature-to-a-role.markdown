---
layout: recipe
permalink: /how-to/configure-the-reject-file-feature-to-a-role/
title: 'Configure the "Reject file" feature of a role'
category: '2. Part B'
sub-category: 'Roles'
rate: '3'
number: '205'
introduction-text: 'The file rejection ends processing of a file permanently with negative result.'
introduction-img: '205.png'
prevUrl: 204
nextUrl: 206
done: ''
lang: en
ref: 205
---

Rejection of a file is done in a processing step. By default every Revision type step comes with rejection functionality.

In order to setup rejection for a processing step:

1. Open file `apps/official-<your-step>/business-processes/meta.js`.
2. Add entry named `rejected` to meta. It needs to have `label` and `order` properties.
3. Open file `apps/official-<your-step>/controller/index.js`.
4. Add controller entry with `match` and `submit` properties, with route (usually it's `[0-9][a-z0-9]+/reject`).
5. In submit you should setup `this.processor` to current user and `this.processingStep.officialStatus` to *"rejected"*.
6. Open or create the file `view/official-<your-step>/business-process-official-form.js`.
7. Create a form pointing to the route you defined in point 4.
8. It is strongly encouraged to create the dialog which asks for `rejectionReason` before the form is submitted (see the example for implementation details).


## Example

In the branch "[configure-the-reject-file-feature-of-a-role](https://github.com/egovernment/eregistrations-demo/tree/configure-the-reject-file-feature-of-a-role)" of eregistrations-demo :

Enable rejection functionality for `socialSecurity` processing step.

### Solution


<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/configure-the-reject-file-feature-of-a-role...configure-the-reject-file-feature-of-a-role-solution#files')">

    
<a name="diff-dc19c2f065a19b399bf078e7a0f75ee1"></a>
<div id="diff-0" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="apps/official-social-security/business-processes/meta.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/f3643113a8bf3521ee6923828fb75abfb29f3746/apps/official-social-security/business-processes/meta.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version f364311 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="5 additions &amp; 1 deletion">6 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="apps/official-social-security/business-processes/meta.js">
        apps/official-social-security/business-processes/meta.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-dc19c2f065a19b399bf078e7a0f75ee1" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/c793f5ff20f750e64f5121e4bad30153b3b6c81b?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=7&amp;mode=100644&amp;next_line_num_left=11&amp;next_line_num_right=11&amp;path=apps%2Fofficial-social-security%2Fbusiness-processes%2Fmeta.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-10" data-right-range="1-10">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -11,7 +11,7 @@ var forEach = require('es5-ext/object/for-each')</td>
  </tr>

    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> meta <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-en">defineProperties</span>({</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	all<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>All<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L14" data-line-number="14" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-		order<span class="pl-k">:</span> <span class="pl-c1 x x-first x-last">3</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		order<span class="pl-k">:</span> <span class="pl-c1 x x-first x-last">4</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R15" data-line-number="15" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R16" data-line-number="16" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	pending<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R17" data-line-number="17" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Pending<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


      <tr class="js-expandable-line" data-position="9">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-dc19c2f065a19b399bf078e7a0f75ee1" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/c793f5ff20f750e64f5121e4bad30153b3b6c81b?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=21&amp;next_line_num_right=21&amp;path=apps%2Fofficial-social-security%2Fbusiness-processes%2Fmeta.js&amp;prev_line_num_left=17&amp;prev_line_num_right=17&amp;right_hunk_size=10" data-left-range="18-20" data-right-range="18-20">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -21,6 +21,10 @@ module.exports = meta = Object.defineProperties({</td>
  </tr>

    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	approved<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R22" data-line-number="22" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Approved<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R23" data-line-number="23" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		order<span class="pl-k">:</span> <span class="pl-c1">2</span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R24" data-line-number="24" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	},</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R25" data-line-number="25" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	rejected<span class="pl-k">:</span> {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R26" data-line-number="26" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Rejected<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R27" data-line-number="27" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		order<span class="pl-k">:</span> <span class="pl-c1">3</span></span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L24" data-line-number="24" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	}</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L25" data-line-number="25" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R29" data-line-number="29" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> }, { _services<span class="pl-k">:</span> <span class="pl-en">d</span>([<span class="pl-s"><span class="pl-pds">'</span>demo<span class="pl-pds">'</span></span>]) });</span>

  </td>
</tr>


    <tr>
    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1L26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-dc19c2f065a19b399bf078e7a0f75ee1R30" data-line-number="30" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-dc19c2f065a19b399bf078e7a0f75ee1" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/c793f5ff20f750e64f5121e4bad30153b3b6c81b?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=apps%2Fofficial-social-security%2Fbusiness-processes%2Fmeta.js&amp;prev_line_num_left=26&amp;prev_line_num_right=30" data-left-range="27-39" data-right-range="31-39">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>

</div>

    
<a name="diff-8fead16f047698f406fd21b6d1dcbf1b"></a>
<div id="diff-1" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="apps/official-social-security/controller/index.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/f3643113a8bf3521ee6923828fb75abfb29f3746/apps/official-social-security/controller/index.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version f364311 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="12 additions &amp; 0 deletions">12 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="apps/official-social-security/controller/index.js">
        apps/official-social-security/controller/index.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-8fead16f047698f406fd21b6d1dcbf1b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/9f931703a8a02908348437a382df16b2b1c5cdc5?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=6&amp;mode=100644&amp;next_line_num_left=4&amp;next_line_num_right=4&amp;path=apps%2Fofficial-social-security%2Fcontroller%2Findex.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=7" data-left-range="1-3" data-right-range="1-3">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -4,6 +4,7 @@</td>
  </tr>

    <tr>
    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bL4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR4" data-line-number="4" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bL5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-k">var</span> assign          <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>es5-ext/object/assign<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bL6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , officialMatcher <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/controller/utils/official-matcher<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , save            <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>mano/utils/save<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bL7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner">   , socialSecurityMatcher;</span>

  </td>
</tr>


    <tr>
    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bL8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bL9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-en">socialSecurityMatcher</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">businessProcessId</span>) {</span>

  </td>
</tr>


      <tr class="js-expandable-line" data-position="8">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-8fead16f047698f406fd21b6d1dcbf1b" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/9f931703a8a02908348437a382df16b2b1c5cdc5?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=3&amp;mode=100644&amp;next_line_num_left=29&amp;next_line_num_right=30&amp;path=apps%2Fofficial-social-security%2Fcontroller%2Findex.js&amp;prev_line_num_left=9&amp;prev_line_num_right=10&amp;right_hunk_size=14" data-left-range="10-28" data-right-range="11-29">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -29,3 +30,14 @@ exports['[0-9][a-z0-9]+/validate'] = {</td>
  </tr>

    <tr>
    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bL29" data-line-number="29" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR30" data-line-number="30" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	},</span>

  </td>
</tr>


    <tr>
    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bL30" data-line-number="30" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR31" data-line-number="31" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	redirectUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span></span>

  </td>
</tr>


    <tr>
    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bL31" data-line-number="31" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR32" data-line-number="32" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> };</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR33" data-line-number="33" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR34" data-line-number="34" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">exports</span>[<span class="pl-s"><span class="pl-pds">'</span>[0-9][a-z0-9]+/reject<span class="pl-pds">'</span></span>] <span class="pl-k">=</span> {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR35" data-line-number="35" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	match<span class="pl-k">:</span> socialSecurityMatcher,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR36" data-line-number="36" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-en">submit</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR37" data-line-number="37" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-smi">save</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, <span class="pl-v">arguments</span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR38" data-line-number="38" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-smi">processingStep</span>.<span class="pl-smi">rejectionProgress</span> <span class="pl-k">!==</span> <span class="pl-c1">1</span>) <span class="pl-k">return</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR39" data-line-number="39" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-v">this</span>.<span class="pl-smi">processingStep</span>.<span class="pl-smi">processor</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">user</span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR40" data-line-number="40" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-v">this</span>.<span class="pl-smi">processingStep</span>.<span class="pl-smi">officialStatus</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>rejected<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR41" data-line-number="41" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	},</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR42" data-line-number="42" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	redirectUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8fead16f047698f406fd21b6d1dcbf1bR43" data-line-number="43" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+};</span>

  </td>
</tr>



        </tbody></table>
      </div>

</div>

    
<a name="diff-84c5a7c7e92938e5ed3e82ee7eb102b5"></a>
<div id="diff-2" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="view/official-social-security/business-process-official-form.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/f3643113a8bf3521ee6923828fb75abfb29f3746/view/official-social-security/business-process-official-form.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version f364311 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="20 additions &amp; 0 deletions">20 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <span class="user-select-contain" title="view/official-social-security/business-process-official-form.js">
        view/official-social-security/business-process-official-form.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-84c5a7c7e92938e5ed3e82ee7eb102b5" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/5b21064e48fa53efa65ffde9d33859c7d41cd138?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=10&amp;mode=100644&amp;next_line_num_left=5&amp;next_line_num_right=5&amp;path=view%2Fofficial-social-security%2Fbusiness-process-official-form.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=30" data-left-range="1-4" data-right-range="1-4">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -5,10 +5,30 @@ var processingDisabler = require('eregistrations/view/components/disable-process</td>
  </tr>

    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R5" data-line-number="5" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R6" data-line-number="6" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-c1">exports</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>eregistrations/view/business-process-official-form<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R7" data-line-number="7" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> </span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> <span class="pl-en">getRejection</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	<span class="pl-k">return</span> [<span class="pl-en">dialog</span>(</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		{ id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>reject-reason<span class="pl-pds">'</span></span>, class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>dialog-reject dialog-modal<span class="pl-pds">'</span></span> },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-en">header</span>(</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+			<span class="pl-en">label</span>({ for<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>revision-reject-reason<span class="pl-pds">'</span></span> }, <span class="pl-en">h3</span>(<span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Reason for rejection of the file<span class="pl-pds">"</span></span>)))</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R13" data-line-number="13" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R14" data-line-number="14" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-en">section</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>dialog-body<span class="pl-pds">'</span></span> },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R15" data-line-number="15" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+			<span class="pl-en">form</span>({ method<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>post<span class="pl-pds">'</span></span>, action<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.<span class="pl-smi">businessProcess</span>.<span class="pl-smi">__id__</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>/reject/<span class="pl-pds">'</span></span> },</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R16" data-line-number="16" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+				<span class="pl-en">p</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>input<span class="pl-pds">'</span></span> }, <span class="pl-en">input</span>({ id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>revision-reject-reason<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R17" data-line-number="17" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+					dbjs<span class="pl-k">:</span> <span class="pl-v">this</span>.<span class="pl-smi">processingStep</span>.<span class="pl-smi">_rejectionReason</span> })),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R18" data-line-number="18" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+				<span class="pl-en">p</span>(<span class="pl-en">input</span>({ type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>submit<span class="pl-pds">'</span></span>, value<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Reject<span class="pl-pds">"</span></span>) })))),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R19" data-line-number="19" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		<span class="pl-en">footer</span>(<span class="pl-en">p</span>(<span class="pl-en">a</span>({ href<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span> }, <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Cancel<span class="pl-pds">"</span></span>))))</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R20" data-line-number="20" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	), <span class="pl-en">a</span>({</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R21" data-line-number="21" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		href<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>#reject-reason<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+		class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>button-main button-main-error<span class="pl-pds">'</span></span></span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R23" data-line-number="23" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	}, <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Reject application<span class="pl-pds">"</span></span>))];</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R24" data-line-number="24" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+};</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R25" data-line-number="25" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L8" data-line-number="8" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R26" data-line-number="26" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-c1">exports</span>.<span class="pl-en">_officialForm</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R27" data-line-number="27" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L9" data-line-number="9" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R28" data-line-number="28" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 	<span class="pl-k">return</span> <span class="pl-en">section</span>({ class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>section-primary<span class="pl-pds">'</span></span> }, <span class="pl-en">processingDisabler</span>(</span>

  </td>
</tr>


    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L10" data-line-number="10" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R29" data-line-number="29" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		<span class="pl-v">this</span>.<span class="pl-smi">processingStep</span>,</span>

  </td>
</tr>


    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L11" data-line-number="11" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R30" data-line-number="30" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 		[</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R31" data-line-number="31" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+			<span class="pl-smi">getRejection</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L12" data-line-number="12" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R32" data-line-number="32" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 			<span class="pl-v">this</span>.<span class="pl-smi">processingStep</span>.<span class="pl-smi">dataForm</span>.<span class="pl-en">toDOMForm</span>(<span class="pl-c1">document</span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L13" data-line-number="13" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R33" data-line-number="33" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 			<span class="pl-en">_if</span>(<span class="pl-en">eq</span>(<span class="pl-v">this</span>.<span class="pl-smi">processingStep</span>.<span class="pl-smi">_approvalProgress</span>, <span class="pl-c1">1</span>),</span>

  </td>
</tr>


    <tr>
    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5L14" data-line-number="14" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-84c5a7c7e92938e5ed3e82ee7eb102b5R34" data-line-number="34" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> 				<span class="pl-en">p</span>(<span class="pl-en">postButton</span>({ buttonClass<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>button-main button-main-success<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


  <tr class="js-expandable-line">
   <td class="blob-num blob-num-expandable" colspan="2">
     <a href="#diff-84c5a7c7e92938e5ed3e82ee7eb102b5" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/5b21064e48fa53efa65ffde9d33859c7d41cd138?diff=unified&amp;in_wiki_context=&amp;mode=100644&amp;path=view%2Fofficial-social-security%2Fbusiness-process-official-form.js&amp;prev_line_num_left=14&amp;prev_line_num_right=34" data-left-range="15-39" data-right-range="35-39">
       <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
     </a>
   </td>
   <td class="blob-code blob-code-expandable"></td>
  </tr>

        </tbody></table>
      </div>

</div>


</div>
