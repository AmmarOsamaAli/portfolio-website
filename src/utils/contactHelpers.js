export function validateContact(values) {
  const errors = {}
  if (!values.name?.trim()) errors.name = 'Please enter your name.'
  else if (values.name.length > 120)
    errors.name = 'Please keep your name under 120 characters.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email?.trim() ?? ''))
    errors.email = 'Please enter a valid email address.'
  if (!values.message?.trim())
    errors.message = 'Please tell me a little about your project or role.'
  else if (values.message.length > 5000)
    errors.message = 'Please keep your message under 5,000 characters.'
  return errors
}
