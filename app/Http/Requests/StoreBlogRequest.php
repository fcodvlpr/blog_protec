<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:225',
            'author' => 'required|string|max:225',
            'content' => 'required|string',
            'image' => 'required|string',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'title.required' => 'The title is required',
            'author.required' => 'The author is required',
            'content.required'=> 'The content is required',
            'image.required' => 'The image is required',
            'title.max' => 'Maximum 225 characters accepted',
            'author.max' => 'Maximum 225 characters accepted',
            'title.string' => 'The title must be a text',
            'author.string' => 'The author must be a text',
            'content.string'=> 'The content must be a text',
            'image.string' => 'The image must be a text',
        ];

    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errors' => $validator->errors()], 422));
    }

}
