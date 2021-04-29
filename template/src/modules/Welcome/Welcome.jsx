import React, {memo} from 'react';
import {makeAppStyles} from '@smart-link/context';
import {useTranslation} from 'react-i18next';

const Welcome = memo(() => {
    const {t} = useTranslation('@smart-link/context');
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span className={classes.welcomeText}>{t('WELCOME_SHARED_APP')}</span>
        </div>
    );
});

const useStyles = makeAppStyles({
    root: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        color: '#F22D3A',
        textShadow: '0 0 .1em, 0 0 .3em',
        fontStyle: 'oblique',
    },
});

export default Welcome;
