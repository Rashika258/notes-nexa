
import React, { FC, Fragment } from 'react';

interface TitleSectionProps {
    title: string,
    subHeading?: string, 
    pill: string
}


const TitleSection: FC<TitleSectionProps> = ({
    title, subHeading, pill
}) => {
  return (
    <Fragment>
        <section className='flex flex-col gap-4 justify-center items-center md:items-center'>
            <article
            className='rounded-full p-[1px] text-sm dark:from-brand-primaryBlue dark:to-brand-primaryPurple'>

<div className='rounded-full px-3 py-1 dark:bg-black'>
    {pill}

</div>
            </article>

        </section>
    </Fragment>
  );
}

export default TitleSection;
