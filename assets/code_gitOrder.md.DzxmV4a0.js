import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.u9PDQrMc.js";const u=JSON.parse('{"title":"本页搜集了git 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"code/gitOrder.md","filePath":"code/gitOrder.md"}'),t={name:"code/gitOrder.md"},e=n(`<h1 id="本页搜集了git-常用命令" tabindex="-1">本页搜集了<strong>git</strong> 常用命令 <a class="header-anchor" href="#本页搜集了git-常用命令" aria-label="Permalink to &quot;本页搜集了**git** 常用命令&quot;">​</a></h1><h2 id="如何把本地项目推送到github仓库中" tabindex="-1">如何把本地项目推送到github仓库中 <a class="header-anchor" href="#如何把本地项目推送到github仓库中" aria-label="Permalink to &quot;如何把本地项目推送到github仓库中&quot;">​</a></h2><blockquote><h3 id="在git命令界面面依次下面命令" tabindex="-1">在git命令界面面依次下面命令 <a class="header-anchor" href="#在git命令界面面依次下面命令" aria-label="Permalink to &quot;在git命令界面面依次下面命令&quot;">​</a></h3></blockquote><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1：git init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2：git add .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3：git commit -m &quot;任意提交消息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4：git branch -m master main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5：git remote add origin 仓库地址的url</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6：git push -u origin main</span></span></code></pre></div><p><strong>如果第六步推送失败，执行下面命令强制推送</strong></p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git push -u origin main --force</span></span></code></pre></div><h2 id="如何清空github仓库中所有文件及文件夹" tabindex="-1">如何清空github仓库中所有文件及文件夹 <a class="header-anchor" href="#如何清空github仓库中所有文件及文件夹" aria-label="Permalink to &quot;如何清空github仓库中所有文件及文件夹&quot;">​</a></h2><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把仓库克隆到本地</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1：git clone 仓库的url</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入本地仓库</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2：cd 你克隆仓库的名字</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除所有文件及文件夹</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3：git rm -r *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交操作消息</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4：git commit -m &#39;清空仓库&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送到仓库中</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5：git push</span></span></code></pre></div><h3 id="清除-dns-缓存-ipconfig-flushdns" tabindex="-1">清除 DNS 缓存 ipconfig /flushdns <a class="header-anchor" href="#清除-dns-缓存-ipconfig-flushdns" aria-label="Permalink to &quot;清除 DNS 缓存 ipconfig /flushdns&quot;">​</a></h3>`,9),l=[e];function p(h,c,r,d,o,g){return i(),a("div",null,l)}const m=s(t,[["render",p]]);export{u as __pageData,m as default};
