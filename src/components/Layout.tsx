import React from 'react';
import Helmet from 'react-helmet';
import { Grid, Column } from '@manuel-bieh/ui/dist/es';
import { withIntl } from '../i18n';
import Header from './Header';
import Footer from './Footer';
import css from './Layout.module.css';

type PropsT = {
    children: any;
    i18n: any;
    t: (key: string) => string;
    title?: string;
};

const Layout = ({ t, i18n, children, title }: PropsT) => (
    <div className={css.pageWrapper}>
        <Helmet title={title || t('meta.title')} titleTemplate={t('meta.titleTemplate')}>
            <html lang={i18n.language} />
        </Helmet>
        <Header />
        <Grid className={css.pageContent} centered>
            <Column>
                <main>{children}</main>
            </Column>
        </Grid>
        <Footer />
    </div>
);

export default withIntl()(Layout);
