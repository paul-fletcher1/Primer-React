import React from 'react'
import FlexContainer from '../FlexContainer'
import {renderClasses, rendersClass} from '../utils/testing'


describe('FlexContainer', () => {
  it('FlexContainer renders wrap classes', () => {
    expect(renderClasses(<FlexContainer wrap="nowrap" />)).toEqual(['d-flex', 'flex-nowrap'])
  })

  it('FlexContainer renders direction classes', () => {
    expect(renderClasses(<FlexContainer direction="row" />)).toEqual(['d-flex', 'flex-row'])
  })

  it('FlexContainer renders justifyContent classes', () => {
    expect(renderClasses(<FlexContainer justifyContent="start" />)).toEqual(['d-flex', 'flex-justify-start'])
  })

  it('FlexContainer renders alignItems classes', () => {
    expect(renderClasses(<FlexContainer alignItems="start" />)).toEqual(['d-flex', 'flex-items-start'])
  })

  it('FlexContainer renders alignContent classes', () => {
    expect(renderClasses(<FlexContainer alignContent="start" />)).toEqual(['d-flex', 'flex-content-start'])
  })

  it('FlexContainer renders inline classes', () => {
    expect(renderClasses(<FlexContainer inline />)).toEqual(['d-inline-flex'])
  })

  it('respects margin utility prop', () => {
    expect(rendersClass(<FlexContainer m={4} />, 'm-4')).toEqual(true)
  })

  it('respects padding utility prop', () => {
    expect(rendersClass(<FlexContainer p={4} />, 'p-4')).toEqual(true)
  })
})
