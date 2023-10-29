<?php
$current_page = $_SERVER['PHP_SELF'];
$current_page = basename($current_page, ".php"); // Remove the extension if needed

function currentPage($page)
{
    global $current_page;
    return $current_page == $page ? 'js-active' : '';
}
?>
<header class="site_header">
    <div class="logo">
        <a href="/">
            <img src="assets/images/logo_horizontal.svg" alt="Company Logo" />
        </a>
    </div>
    <nav class="site_nav">
        <a href="kaishan.php" class="<?= currentPage("kaishan"); ?>">開山禪師</a>
        <a href="foyinshan.php" class="<?= currentPage("foyinshan"); ?>">佛印山</a>
        <a href="tiandi.php" class="<?= currentPage("tiandi"); ?>">天地家園</a>
        <a href="wotu.php" class="<?= currentPage("wotu"); ?>">沃土運動</a>
        <a href="bigu.php" class="<?= currentPage("bigu"); ?>">辟穀營</a>
        <a href="jingguan.php" class="<?= currentPage("jingguan"); ?>">境觀營</a>
        <a href="fofa.php" class="<?= currentPage("fofa"); ?>">線上佛法</a>
        <a href="news.php" class="<?= currentPage("news"); ?>">最新消息</a>
    </nav>
    <div class="m_menu" id="m_menu">
        <div class="group">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
        </div>
    </div>
</header>