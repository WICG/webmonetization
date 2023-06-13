import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function Specifications({ children, link }) {
  return (
    <BrowserOnly>
      {() => (
        <div className='specifications'>
          <table>
            <thead>
              <tr>
                <th>Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href={
                      location.protocol +
                      '//' +
                      location.host +
                      '/specification.html#' +
                      link
                    }
                    className='external'
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                  >
                    {children}
                    <OpenInNewIcon color='disabled' fontSize='inherit' />
                    <br></br>
                    <span>{link && `#${link}`}</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </BrowserOnly>
  )
}
