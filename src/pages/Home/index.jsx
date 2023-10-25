import classNames from 'classnames';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Header from '../../components/Header';
import styles from './home.module.scss';
import scrollDownImg from '../../assets/img/scroll-down.svg';
import downArrow from '../../assets/img/down-icon.svg';
import clafiya from '../../assets/img/clafiya.jpg';
import naipayImg from '../../assets/img/naipay.svg';
import sanoImg from '../../assets/img/sano.svg';
import propBaronImg from '../../assets/img/prop-baron.png';
import arrRight from '../../assets/img/arrow-right.svg';
import Footer from '../../components/Footer';

export default function Home() {
  const projects = [
    {
      img: propBaronImg,
      name: 'Property Baron Network',
      description:
        'A Property technology dashboard platform for trading and management.',
      link: 'https://numerous-sardine-289.notion.site/PBN-Web-App-UI-UX-Case-Study-5fce8d1bf4474b618c9d21556caecc66',
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
      img: clafiya,
      name: 'Clafiya',
      description:
        'Uniting in-person care and virtual solutions for a personalized healthcare experience.',
      textTheme: 'light',
      link: 'https://numerous-sardine-289.notion.site/Clafiya-Admin-Dashboard-Redesign-Case-Study-2b7ff342a4764a289a4bd2e345ba9263',
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
            Product Designer <br /> and Musician
          </h1>
          <p className={classNames('body-text', styles.captionText)}>
            I leverage on proven data and design thinking to solve real business
            problems and shape the development of products.
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
            <Grid item>
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
                  href={proj.link}
                  target="_blank"
                >
                  <span>Read Case Study</span>
                  <img alt="" className={styles.arrRight} src={arrRight} />
                </Button>
              </div>
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
