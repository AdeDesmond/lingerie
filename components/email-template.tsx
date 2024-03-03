import * as React from 'react';

interface EmailTemplateProps {
    body?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({body}) => (
    <div>
        <h1>Thanks for joining our community!</h1>
        <p>{body}</p>
    </div>
);
