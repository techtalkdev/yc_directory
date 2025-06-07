/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use server';

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from 'slugify';
import { writeClient } from "@/sanity/lib/writeClient";

export const createPitch = async ( 
    state: any,
     form: FormData, 
     pitch: string
     ) => {
    const session = await auth();

    if(!session) 
        return parseServerActionResponse({
            error: 'Not Signed In',
            status: 'ERROR',
    });
    const { title, description, category, link } = Object.fromEntries(
        Array.from(form).filter(([key]) => key !== 'pitch'),
    );

    const slug = slugify(title as string, { lower: true, strict: true })

    try {
        const startup = {
            title,
            description,
            category,
            image: link,
            slug: {
                _type: slug,
                current: slug,
            },
            author: {
                _type: 'reference',
                //@ts-ignore
                _ref: session?.id,
            },
            pitch,
        };

        const result = await writeClient.create({ _type: 'startup',...startup});

        return parseServerActionResponse({
            ...result,
            error: '',
            status: 'SUCCESS'
        });
    } catch (error) {
        console.log(error);
        return parseServerActionResponse({ error: JSON.stringify({
            error: JSON.stringify(error),
            status: 'ERROR',
        })
    })
 }
}