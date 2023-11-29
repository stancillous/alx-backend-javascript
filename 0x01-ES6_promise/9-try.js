export default function guardrail (mathFunction) {
  const queue = [];

  try {
    const mathFunctionResult = mathFunction();
    queue.push(mathFunctionResult);
  } catch (error) {
    queue.push(error);
  } finally {
    queue.push('Guardrail was processed');
    return queue;
  }
}
