import * as React from 'react'
import createBrandRequest from './modules/request/createBrandRequest'

interface Props { }

const Brand: React.StatelessComponent = (props: Props) => (
  <button
    onClick={createBrandRequest}>
    Create Brand
  </button>
)

export default Brand