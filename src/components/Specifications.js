import React from 'react'
import OpenInNew from '@material-ui/icons/OpenInNew'
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
                    <OpenInNew color='disabled' fontSize='inherit' />
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
