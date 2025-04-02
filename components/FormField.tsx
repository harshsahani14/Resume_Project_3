import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from './ui/form'
import { Input } from './ui/input'

interface FormFieldProps<T extends FieldValues>{

    control:Control<T>
    name:Path<T>
    label: string
    placeholder?:string
    type?: 'text' | 'email' | 'password' | 'file'
}

const FormField = ({ name ,label,placeholder,control,type="text" } : FormFieldProps<T>) => (


    <Controller
        name={name}
        control={control}

        render={ ({field})=>(

            <FormItem>
              <FormLabel className='  text-light-100'>{label}</FormLabel>
              <FormControl>
                <Input type={type} className="input" placeholder={placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
    
        }

    />
    
    
    
)

export default FormField