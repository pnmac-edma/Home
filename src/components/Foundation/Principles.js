import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { color, fontSize } from '@edma/design-tokens/';
import ScrollToTopController from '../ScrollToTopController';
import SplitText from '../SplitText';
import { ReactComponent as ArrowDiag } from '../../assets/img/arrow.diag.svg';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    background: theme.palette.type === 'light' ? color.white : color.black,
    textAlign: 'left'
  },
  divider: {
    height: 4,
    color: theme.palette.type === 'light' ? color.g100 : color.g700
  },
  listItem: {
    display: 'block',
    marginBottom: '3rem',
    '& .MuiListItemText-primary': {
      fontSize: fontSize['1'],
      color: theme.palette.type === 'light' ? color.v700 : color.y300,
    }
  },
  headingSpan: {
    fontWeight: 'bold'
  },
  explore: {
    position: 'absolute',
    right: '-2rem',
    width: 380,
    height: 427,
    top: -20,
    overflow: 'visible'
  },
  learn: {
    position: 'absolute',
    right: '-2rem',
    top: 200,
    width: 315,
    height: 427,
    overflow: 'visible'
  },
  simplify: {
    position: 'absolute',
    right: '-2rem',
    top: 100,
    width: 315,
    height: 427,
    overflow: 'visible'
  },
  collab: {
    position: 'absolute',
    right: '-2rem',
    top: 100,
    width: 315,
    height: 427,
    overflow: 'visible'
  },
  prev: {
    position: 'relative',
    marginTop: '2rem',
    width: '100%',
    textAlign: 'left',

    '& a': {
      color: theme.palette.type === 'light' ? color.black : color.white,
      padding: 16,
      borderRadius: 4,
      transition: 'all .2s ease-in-out',
      textDecoration: 'none',

      '&:hover': {
        background: theme.palette.type === 'light' ? color.g100 : color.g900
      },

      '& svg': {
        position: 'relative',
        top: 6,
        right: 4
      }
    }
  },
  next: {
    position: 'relative',
    marginTop: '2rem',
    width: '100%',
    textAlign: 'right',

    '& a': {
      color: theme.palette.type === 'light' ? color.black : color.white,
      padding: 16,
      borderRadius: 4,
      transition: 'all .2s ease-in-out',
      textDecoration: 'none',

      '&:hover': {
        background: theme.palette.type === 'light' ? color.g100 : color.g900
      },

      '& svg': {
        position: 'relative',
        top: 6,
        left: 8
      }
    }
  },
  huge: {
    color: theme.palette.type === 'light' ? color.y500 : color.y300
  }
}));

export default function Principles(props) {
  const classes = useStyles();

  return (
    <>
      <ScrollToTopController />
      <div className='mask mask--huge'>
        <div className={`huge ${classes.huge}`}>01<span className='huge--num'>b</span></div>
      </div>
      <span className='mask'>
        <div className='internal-heading'>Design Principles</div>
      </span>
      <div className='internal-intro'>
        <SplitText copy="Team Craft builds tools and services that make it easier for our coworkers to help people realize their dream of home." />
        <br/><br/>
        <SplitText copy="These principles are the core of how we design experiences on Team Craft." />
      </div>
      <div className='internal-heading'>Explore</div>
      <div className='internal-paragraph'>
        Embrace the unknown<br/>
        Experiment with fresh ideas and new technologies in order to solve problems<br/>
        Think boldly<br/>
        Dare to be innovative and disruptive<br/>
        Break things, and then fix them<br/>
        Have the uncomfortable conversations<br/>
        Stay honest<br/>
        Reject boundaries: “Not invented here” doesn’t exist<br/>
        Accept being misunderstood for long periods of time
      </div>
      <div className='internal-heading'>Learn</div>
      <div className='internal-paragraph'>
        Obsess over the people who use our products<br/>
        Make no assumptions<br/>
        Prioritize research, analysis, and testing with users<br/>
        Seek feedback early and often<br/>
        Validate all opinions, especially your own<br/>
        Bring data forward, even when it might be controversial or embarrassing<br/>
        Treat users like trusted partners<br/>
        Prioritize based on user needs<br/>
        Listen, ask questions, challenge assumptions, and stay humble<br/>
        Make sure every feature adds value for users and for the business
      </div>
      <div className='internal-heading'>Simplify</div>
      <div className='internal-paragraph'>
        Design products that are fundamentally useful for people<br/>
        Make sure that every design element works with, and contributes to, the larger whole<br/>
        Less is more<br/>
        Use motion to provide meaning<br/>
        Remove roadblocks for people<br/>
        Optimize required steps<br/>
        Auto-fill form fields<br/>
        Make unambiguous, easy to follow, and straight forward designs<br/>
        Respect our users’ time and the impact we have on their lives<br/>
        Ensure people always understand what is happening and why<br/>
        Prioritize content over chrome<br/>
        Reduce UI to its most essential ingredients<br/>
        Ensure interfaces have clear and visually prioritized calls to action<br/>
        Avoid reinventing the wheel
      </div>
      <div className='internal-heading'>Collaborate</div>
      <div className='internal-paragraph'>
        We are greater than the sum of our parts<br/>
        Step up every day to help the team do what needs to be done<br/>
        When an opportunity appears to make something better, do it<br/>
        “Not my job” doesn’t exist here<br/>
        Work together to achieve more<br/>
        Treat our users like our most important collaborators<br/>
        Embrace change<br/>
        Adopt new behaviors, values, and attitudes<br/>
        Learn from team mates and make decisions<br/>
        Treat people with respect and dignity<br/>
        Embrace open source<br/>
        Publish your work and share your ideas at every turn<br/>
        Work not just with each other, but with the world
      </div>
      <div className='Footer Footer--foundation'>
        <div className='Footer__left'></div>
        <Link to='/foundation/language/' className='Footer__right'>
          <div className='Footer__container'>
            <div className='Footer__heading' data-num='01' data-let='c'>next</div>
          </div>
          <ArrowDiag className='Footer__icon' />
          <div className='Footer__link'>
            <div className='Footer__num'>01c.</div>
            <div className='Footer__title'>Language</div>
          </div>
        </Link>
      </div>
    </>
  );
};
