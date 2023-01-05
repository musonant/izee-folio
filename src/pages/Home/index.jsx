import classNames from 'classnames';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Header from '../../components/Header';
import styles from './home.module.scss';
import scrollDownImg from '../../assets/img/scroll-down.svg';
import awoofImg from '../../assets/img/awoof.png';
import npiImg from '../../assets/img/npi.png';
import storyMaximaImg from '../../assets/img/story-maxima.png';
import propBaronImg from '../../assets/img/prop-baron.png';
import arrRight from '../../assets/img/arrow-right.svg';

export default function Home() {
  const projects = [
    {
      img: propBaronImg,
      name: 'Property Baron Network',
      description: 'A Property technology dashboard platform for trading and management.',
    },
    {
      img: storyMaximaImg,
      name: 'Story Maxima',
      description: 'A Mobile application that links creatives to open job opportunities.',
      textTheme: 'light',
    },
    {
      img: awoofImg,
      name: 'Awoof Website',
      description: 'A socially connected platform to give back, engage with, and reward your audiences and community.',
    },
    {
      img: npiImg,
      name: 'NPI Summit',
      description: 'Nigeria Property Investment Summit is set to show global investors the Real-Estate opportunities in Nigeria.',
      textTheme: 'light',
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
          <h1 className={styles.title}>Product Designer <br /> and Musician</h1>
          <p className={classNames('body-text', styles.captionText)}>I leverage on proven data and design thinking, both to solve real business problems, and to shape the development of products.</p>
        </div>

        <div>
          <img className={styles.scrollDownImg} alt="scroll-down" src={scrollDownImg} />
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
          {projects.map(proj => (
            <Grid item>
              <div className={styles.proj}>
                <div className={classNames([styles.projectInfo, { [styles.light]: proj.textTheme === 'light' }])} style={{ backgroundImage: 'url(' + proj.img + ')'}}>
                  <p className={styles.title}>{proj.name}</p>
                  <p className={styles.description}>{proj.description}</p>
                </div>
                <Button fullWidth className={styles.actionBtn} size="large" variant="contained">
                  <span>Read Case Study</span>
                  <img alt="" className={styles.arrRight} src={arrRight} />
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  )
}
