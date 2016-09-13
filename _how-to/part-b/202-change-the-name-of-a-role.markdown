---
layout: recipe
permalink: /how-to/change-the-name-of-a-role/
title: 'Change the name of a role'
category: '2. Part B'
sub-category: 'Roles'
rate: '1'
number: '202'
introduction-text: 'By name of a role we mean a label associated with role enum value'
introduction-img: '202.png'
prevUrl: 201
nextUrl: 203
done: ''
lang: en
ref: 202
---

1. Open file `model/user/roles.js`.
2. Identify the line where role label is set e.g. `db.Role.meta.get('officialProcessing').label = _("Processing");`.
3. Change the value of the label property.

---

## Example

In the branch "[change-the-name-of-a-role](https://github.com/egovernment/eregistrations-demo/tree/change-the-name-of-a-role)" of eregistrations-demo :

Change the label of the `officialFrontDesk` from *"Front Desk"* to *"Withdrawal"*.

### Solution

<div id="files" class="diff-view " onclick="window.open('https://github.com/egovernment/eregistrations-demo/compare/change-the-name-of-a-role...change-the-name-of-a-role-solution#files')">

        
<a name="diff-9abd234fe54a68a4bbc4bfc9a5048605"></a>
<div id="diff-0" class="file js-details-container
             
             
             
             
             show-inline-notes
           ">
  <div class="file-header" data-path="model/user/roles.js">
    <div class="file-actions">
        <span class="show-file-notes">
          <label>
            <input type="checkbox" checked="checked" class="js-toggle-file-notes">
            Show notes
          </label>
        </span>

          <a href="/egovernment/eregistrations-demo/blob/cd335b91b5210a87c755df3a4ba82a595c7bd11a/model/user/roles.js" class="btn btn-sm tooltipped tooltipped-nw" rel="nofollow" aria-label="View the whole file at version cd335b9 ">View</a>


    </div>
    <div class="file-info">
        <span class="diffstat tooltipped tooltipped-e" aria-label="1 addition &amp; 1 deletion">2 <span class="block-diff-added"></span><span class="block-diff-deleted"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span><span class="block-diff-neutral"></span></span>

      <span class="user-select-contain" title="model/user/roles.js">
        model/user/roles.js
      </span>
      
    </div>
  </div>

      <div class="data highlight blob-wrapper">
        <table class="diff-table tab-size  " data-tab-size="8">
          
      <tbody><tr class="js-expandable-line" data-position="0">
    <td class="blob-num blob-num-expandable" colspan="2">
      <a href="#diff-9abd234fe54a68a4bbc4bfc9a5048605" class="diff-expander js-expand" title="Expand" aria-label="Expand" data-url="/egovernment/eregistrations-demo/blob_excerpt/68fde56385220fbaaaa0ecd6c8d64224e55147ef?diff=unified&amp;in_wiki_context=&amp;left_hunk_size=4&amp;mode=100644&amp;next_line_num_left=19&amp;next_line_num_right=19&amp;path=model%2Fuser%2Froles.js&amp;prev_line_num_left=&amp;prev_line_num_right=&amp;right_hunk_size=4" data-left-range="1-18" data-right-range="1-18">
        <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
      </a>
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk">@@ -19,4 +19,4 @@ db.Role.meta.get('user').label = _("User");</td>
  </tr>

    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R19" data-line-number="19" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">meta</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>usersAdmin<span class="pl-pds">'</span></span>).<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Users Admin<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R20" data-line-number="20" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">meta</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>officialRevision<span class="pl-pds">'</span></span>).<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Revision<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R21" data-line-number="21" class="blob-num blob-num-context js-linkable-line-number"></td>

  <td class="blob-code blob-code-context">

    <span class="blob-code-inner"> <span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">meta</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>officialProcessing<span class="pl-pds">'</span></span>).<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span>Processing<span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605L22" data-line-number="22" class="blob-num blob-num-deletion js-linkable-line-number"></td>

    <td class="blob-num blob-num-deletion empty-cell"></td>

  <td class="blob-code blob-code-deletion">

    <span class="blob-code-inner">-<span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">meta</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>officialFrontDesk<span class="pl-pds">'</span></span>).<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span><span class="x x-first x-last">Front Desk</span><span class="pl-pds">"</span></span>);</span>

  </td>
</tr>


    <tr>
    <td class="blob-num blob-num-addition empty-cell"></td>

    <td id="diff-9abd234fe54a68a4bbc4bfc9a5048605R22" data-line-number="22" class="blob-num blob-num-addition js-linkable-line-number"></td>

  <td class="blob-code blob-code-addition">

    <span class="blob-code-inner">+<span class="pl-smi">db</span>.<span class="pl-smi">Role</span>.<span class="pl-smi">meta</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>officialFrontDesk<span class="pl-pds">'</span></span>).<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-en">_</span>(<span class="pl-s"><span class="pl-pds">"</span><span class="x x-first x-last">Withdrawal</span><span class="pl-pds">"</span></span>);</span>

  </td>
</tr>



        </tbody></table>
      </div>
</div>

</div>
