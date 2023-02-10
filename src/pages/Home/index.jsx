import classNames from 'classnames';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Header from '../../components/Header';
import styles from './home.module.scss';
import scrollDownImg from '../../assets/img/scroll-down.svg';
import downArrow from '../../assets/img/down-icon.svg';
import awoofImg from '../../assets/img/awoof.png';
import npiImg from '../../assets/img/npi.png';
import storyMaximaImg from '../../assets/img/story-maxima.png';
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
      mobileLink:
        'https://www.figma.com/proto/FBuW3dFBls4Jd8xld4gUdV/Portfolio?page-id=918%3A5478&node-id=932%3A14361&viewport=-2280%2C63%2C0.2&scaling=min-zoom&starting-point-node-id=962%3A27282',
      desktopLink:
        'https://www.figma.com/proto/FBuW3dFBls4Jd8xld4gUdV/Portfolio?page-id=918%3A5478&node-id=932%3A5428&viewport=281%2C133%2C0.03&scaling=scale-down-width&starting-point-node-id=962%3A27282',
    },
    {
      img: storyMaximaImg,
      name: 'Story Maxima',
      description:
        'A Mobile application that links creatives to open job opportunities.',
      textTheme: 'light',
      mobileLink:
        'https://www.figma.com/proto/FBuW3dFBls4Jd8xld4gUdV/Portfolio?page-id=918%3A5478&node-id=932%3A12163&viewport=-408%2C182%2C0.06&scaling=min-zoom&starting-point-node-id=962%3A27282',
      desktopLink:
        'https://www.figma.com/proto/FBuW3dFBls4Jd8xld4gUdV/Portfolio?page-id=918%3A5478&node-id=932%3A3234&viewport=-8%2C182%2C0.06&scaling=scale-down-width&starting-point-node-id=962%3A27282',
    },
    {
      img: awoofImg,
      name: 'Awoof Website',
      description:
        'A socially connected platform to give back, engage with, and reward your audiences and community.',
      mobileLink:
        'https://www.figma.com/proto/FBuW3dFBls4Jd8xld4gUdV/Portfolio?page-id=918%3A5478&node-id=940%3A23588&viewport=-1129%2C136%2C0.11&scaling=min-zoom&starting-point-node-id=962%3A27282',
      desktopLink:
        'https://www.figma.com/proto/FBuW3dFBls4Jd8xld4gUdV/Portfolio?page-id=918%3A5478&node-id=940%3A21229&viewport=-289%2C136%2C0.11&scaling=scale-down-width&starting-point-node-id=962%3A27282',
    },
    {
      img: npiImg,
      name: 'NPI Summit',
      description:
        'Nigeria Property Investment Summit is set to show global investors the Real-Estate opportunities in Nigeria.',
      textTheme: 'light',
      mobileLink:
        'https://www.figma.com/proto/FBuW3dFBls4Jd8xld4gUdV/Portfolio?page-id=918%3A5478&node-id=940%3A22859&viewport=-1249%2C136%2C0.11&scaling=min-zoom&starting-point-node-id=962%3A27282',
      desktopLink:
        'https://www.figma.com/proto/FBuW3dFBls4Jd8xld4gUdV/Portfolio?page-id=918%3A5478&node-id=940%3A22130&viewport=32%2C151%2C0.06&scaling=scale-down-width&starting-point-node-id=962%3A27282',
    },
  ];

  const isMobileDevice = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    }
    return false;
  };

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
            I leverage on proven data and design thinking, both to solve real
            business problems, and to shape the development of products.
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
                  href={isMobileDevice() ? proj.mobileLink : proj.desktopLink}
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
