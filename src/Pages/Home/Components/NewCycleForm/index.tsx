import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="tasks-history"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="tasks-history">
        <option value="lawn the mown" />
        <option value="make dinner" />
        <option value="look at the stars" />
      </datalist>

      <label htmlFor="minutesTotal">durante</label>
      <MinutesAmountInput
        id="minutesTotal"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
