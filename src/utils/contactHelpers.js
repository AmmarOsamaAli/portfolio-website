export const contactTopics = [
  'Freelance project',
  'Software engineering opportunity',
  'Collaboration / Other',
]

export function validateContact(values) {
  const errors = {}
  if (!values.name?.trim()) errors.name = 'Please enter your name.'
  else if (values.name.length > 120)
    errors.name = 'Please keep your name under 120 characters.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email?.trim() ?? ''))
    errors.email = 'Please enter a valid email address.'
  if (!contactTopics.includes(values.topic))
    errors.topic = 'Please choose what you would like to discuss.'
  if (!values.message?.trim())
    errors.message =
      'Please tell me a little about what you would like to discuss.'
  else if (values.message.length > 5000)
    errors.message = 'Please keep your message under 5,000 characters.'
  return errors
}
