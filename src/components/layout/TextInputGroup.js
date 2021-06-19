import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bulma-components'
import classnames from 'classnames'

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <Form.Field>
      <Form.Label htmlFor={name}>{label}</Form.Label>
        <Form.Control>
          <Form.Input 
            className={classnames({'is-danger': error})}
            type={type} 
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          >
        </Form.Input>
      </Form.Control>
      {error && <Form.Help color='danger'>
        {error}
      </Form.Help>}
    </Form.Field>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;
