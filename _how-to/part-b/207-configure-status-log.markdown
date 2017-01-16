---
layout: recipe
permalink: /how-to/configure-status-log/
title: 'Configure status log'
category: '2. Part B'
sub-category: 'Roles'
rate: '2'
number: '207'
introduction-text: 'This recipe describes how to configure status log (history of processing).'
introduction-img: '207.png'
prevUrl: 206
nextUrl: 221
done: ''
lang: en
ref: 207
---

Status logs are small text entries about operations done on the file during Part B flow.
Usually a new status log entry whenever a status of the file changes (send back, rejection, approval).
Some roles (like revision) come with predefined default status log entries triggered after some changes in the file.

In order to configure a status log:

1. Create a file `status-log.js` in `apps/<your-official-app>/server/`.
2. Define an array of status logs for the step and export it.

The configuration array should contain configuration objects, see example for details.
As you can see from example, two collections are specified: `preTrigger` and `trigger`.
You should always define such two collections.
The `trigger` collection reflects the main triggering logic, you can think of it:
Whenever something gets to this collection, add status log entry.
The `preTrigger` is also needed at the moment. It should provide some condition which occurs in the natural flow before the condition described by `trigger`.
If unsure how to build your `preTrigger`, a good candidate is `isSubmitted` property for businessProcesses.
You may wonder why is it needed. It's because at system startup, the recalculations will setup any dynamically calculated values.
This may cause retriggering of any previously executed triggers, thus produce unwanted duplication of status logs.
However, during recalculations, the values will not go into state you defined for `preTrigger` (you should define the `preTrigger` so that it will not happen).
It is guaranteed by contract that the `trigger` will not execute unless the `preTrigger` has been executed.


## Example

In the branch "[configure-status-log](https://github.com/egovernment/eregistrations-demo/tree/configure-status-log)" of eregistrations-demo :

Add status log to processing role. The log should add entry "Certificates issued".

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/configure-status-log...configure-status-log-solution?#files')">

  <div class="js-diff-progressive-container">
    
<a name="diff-8993fc074913de7de7a3b84528398e4d"></a>
<div id="diff-0" class="file js-file js-details-container Details
             
             
             
             
             
              show-inline-notes
           ">
  <div class="file-header" data-path="apps/official-processing/server/status-log.js" data-short-path="8993fc0" data-anchor="diff-8993fc074913de7de7a3b84528398e4d">
    <div class="file-actions">

        <span class="show-file-notes pt-1">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show comments
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/cb9c9ffeec2fdb486b4276fe7e1409b0eaa9a42d/apps/official-processing/server/status-log.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version cb9c9ff ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="12 additions &amp; 0 deletions">12 <span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span><span class="block-diff-added"></span></span>

      <a href="#diff-8993fc074913de7de7a3b84528398e4d" class="link-gray-dark" title="apps/official-processing/server/status-log.js">
        apps/official-processing/server/status-log.js
      </a>

      
    </div>
  </div>
  <div class="js-file-content">

        <div class="data highlight blob-wrapper">
          <table class="diff-table tab-size  " data-tab-size="8">
            
      <tbody><tr data-position="0">
    <td id="diff-8993fc074913de7de7a3b84528398e4dL-1" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td id="diff-8993fc074913de7de7a3b84528398e4dR0" class="blob-num blob-num-hunk non-expandable" data-line-number="..."></td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -0,0 +1,12 @@</td>
  </tr>

    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR1" data-line-number="1" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR2" data-line-number="2" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR3" data-line-number="3" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-k">var</span> _                 <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../i18n<span class="pl-pds">'</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR4" data-line-number="4" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+  , businessProcesses <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>../../../apps-common/business-processes/submitted/demo<span class="pl-pds">'</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR5" data-line-number="5" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR6" data-line-number="6" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> [{</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR7" data-line-number="7" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	preTrigger<span class="pl-k">:</span> <span class="pl-smi">businessProcesses</span>.<span class="pl-en">filterByKeyPath</span>(<span class="pl-s"><span class="pl-pds">'</span>processingSteps/map/processing/isPending<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR8" data-line-number="8" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	trigger<span class="pl-k">:</span> <span class="pl-smi">businessProcesses</span>.<span class="pl-en">filterByKeyPath</span>(<span class="pl-s"><span class="pl-pds">'</span>processingSteps/map/processing/isApproved<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR9" data-line-number="9" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	official<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>processingSteps/map/processing/processor<span class="pl-pds">'</span></span>,</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR10" data-line-number="10" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	label<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Processing<span class="pl-pds">"</span></span>),</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR11" data-line-number="11" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+	text<span class="pl-k">:</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Certificates issued<span class="pl-pds">"</span></span>)</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-8993fc074913de7de7a3b84528398e4dR12" data-line-number="12" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+}];</span>

  </td>
</tr>



          </tbody></table>
        </div>

  </div>
</div>

  </div>

</div>