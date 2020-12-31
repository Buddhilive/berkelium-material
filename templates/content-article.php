<div class="bk-blogpost">
    <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner bk-blogpost__header">
            <div class="mdc-layout-grid__cell">
                <span class="material-icons">calendar_today</span>
                <?php the_date(); ?>
            </div>
            <div class="mdc-layout-grid__cell">
                <span class="material-icons">local_offer</span>
                <?php the_tags(); ?>
            </div>
            <div class="mdc-layout-grid__cell">
                <span class="material-icons">category</span>
                <?php the_category(); ?>
            </div>
            <div class="mdc-layout-grid__cell">
                <span class="material-icons">comment</span>
                <?php comments_number( ); ?>
            </div>
        </div>

        <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell--span-12">
                <?php the_content( ); ?>
            </div>
        </div>
    </div>
</div>