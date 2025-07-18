import classNames from 'classnames';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Header from '../../components/Header';
import styles from './home.module.scss';
import scrollDownImg from '../../assets/img/scroll-down.svg';
import downArrow from '../../assets/img/down-icon.svg';
import clafiya from '../../assets/img/clafiya.webp';
import landCurator from '../../assets/img/land_curator.webp';
import zeem from '../../assets/img/zeem.webp';
import naipayImg from '../../assets/img/naipay.svg';
import sanoImg from '../../assets/img/sano.svg';
import propBaronImg from '../../assets/img/prop-baron.png';
import arrRight from '../../assets/img/arrow-right.svg';
import Footer from '../../components/Footer';

export default function Home() {
  const projects = [
    {
      img: clafiya,
      name: 'Clafiya',
      description:
        'Uniting in-person care and virtual solutions for a personalized healthcare experience.',
      textTheme: 'light',
      link: 'https://numerous-sardine-289.notion.site/Clafiya-Website-Redesign-0a32ee1528e44a8db6ea35cf3429f545',
    },
    {
      img: naipayImg,
      name: 'Naipay',
      description:
        'Naipay focuses on catering to the needs of the underserved and unbanked population.',
      textTheme: 'light',
      link: 'https://numerous-sardine-289.notion.site/Naipay-Bank-UI-UX-Case-Study-c2979a1395de4ccd930f5ef483abcb57',
    },
    {
      img: landCurator,
      name: 'Land Curator',
      textTheme: 'light',
      description: 'Find Your Perfect Land in Texas & New Mexico.',
      linkLabel: 'View Live Website',
      link: 'https://landcurator.com',
    },
    {
      img: zeem,
      name: 'Zeem',
      textTheme: 'light',
      description:
        'Zeem makes studying abroad easy and within reach. Direct access to top universities and even student loan',
      link: 'https://numerous-sardine-289.notion.site/Zeem-Website-2231ca569bba804189bfd0df783f4508?source=copy_link',
    },
    {
      img: propBaronImg,
      name: 'Property Baron Network',
      description:
        'A Property technology dashboard platform for trading and management.',
      link: 'https://numerous-sardine-289.notion.site/PBN-Web-App-UI-UX-Case-Study-5fce8d1bf4474b618c9d21556caecc66',
    },
    {
      img: sanoImg,
      name: 'Sano',
      textTheme: 'light',
      description:
        'Everyday health application that allow users to set and track their nutrition goals.',
      link: 'https://numerous-sardine-289.notion.site/Sano-App-UI-UX-Case-Study-006d2b115cc04210ae4fb4a2d246926d',
    },
  ];

  return (
    <div>
      <div className={styles.headerContainer}>
        <Header />
      </div>

      <section className={styles.landingArea}>
        <div className={styles.textArea}>
          <p className={styles.greeting}>Hello, Israel Here</p>
          <h1 className={styles.title}>
            Turning Complex Problems <br /> Into Intuitive Products
          </h1>
          <p className={classNames('body-text', styles.captionText)}>
            I design digital products that drive growth, with a deep focus on
            user behaviour, business goals, and design thinking.
          </p>
        </div>

        <div className={styles.scrollDown}>
          <img
            className={classNames(styles.scrollDownImg, styles.rotating)}
            alt="scroll-down"
            src={scrollDownImg}
          />
          <div className={styles.downArrow}>
            <img src={downArrow} alt="" className={styles.downArroImg} />
          </div>
        </div>
      </section>

      <section className={styles.projectsList}>
        <Grid
          justifyContent="center"
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            maxWidth: { sm: 700, md: 900 },
          }}
        >
          {projects.map((proj) => (
            <Grid item sx={{ width: { md: 400 }, flexGrow: 1 }}>
              <a className={styles.projLink} target="blank" href={proj.link}>
                <div className={styles.proj}>
                  <div
                    className={classNames([
                      styles.projectInfo,
                      { [styles.light]: proj.textTheme === 'light' },
                    ])}
                    style={{ backgroundImage: 'url(' + proj.img + ')' }}
                  >
                    <p className={styles.title}>{proj.name}</p>
                    <p className={styles.description}>{proj.description}</p>
                  </div>
                  <Button
                    fullWidth
                    className={styles.actionBtn}
                    size="large"
                    variant="contained"
                  >
                    <span>{proj.linkLabel || 'Read Case Study'}</span>
                    <img alt="" className={styles.arrRight} src={arrRight} />
                  </Button>
                </div>
              </a>
            </Grid>
          ))}
        </Grid>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}
