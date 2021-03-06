import React from 'react'
import { bpMinMD } from '../../../src/lib/breakpoints'
import { css } from '@emotion/core'

const Feature = props => {
  return (
    <span
      css={css({
        [bpMinMD]: {
          gridTemplateColumns: '40% 60%',
        },
        marginTop: '60px',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '30px',
        img: {
          maxWidth: '100%',
          borderRadius: '5px',
        },
        h5: {
          fontWeight: 'bold',
        },
        h4: {
          fontSize: '1.4em',
        },
      })}
    >
      <div>
        <h5>{props.illustrator}</h5>
        <a href={props.sourceURL}>
          <h4>{props.sourceTitle}</h4>
        </a>
        <p>{props.children}</p>
      </div>
      <img alt={props.sourceTitle} src={props.imageURL} />
    </span>
  )
}

export default Feature
