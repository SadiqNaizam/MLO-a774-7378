import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Login attempt with:', { username, password });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log('Simulated login complete.');
    // Example: setUsername(''); 
    // Example: setPassword('');
  }, [username, password]);

  const handleSignUpClick = React.useCallback(() => {
    console.log('Navigate to Sign Up page clicked.');
    // In a real app, this would likely use a router to navigate.
  }, []);

  return (
    // Layout requirements: mainContent.container is "flex flex-col gap-4"
    <div className={cn('flex flex-col gap-4', className)}>
      <h2 className="text-2xl font-bold text-card-foreground text-left">
        Log in
      </h2>
      
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
          required
          className="bg-card border-input text-card-foreground placeholder:text-muted-foreground"
          aria-label="Username"
        />
        
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          required
          className="bg-card border-input text-card-foreground placeholder:text-muted-foreground"
          aria-label="Password"
        />
        
        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </Button>
      </form>
      
      <Button
        variant="link"
        className="text-muted-foreground mx-auto text-sm font-normal hover:text-primary/90"
        onClick={handleSignUpClick}
        disabled={isLoading}
      >
        or, sign up
      </Button>
    </div>
  );
};

export default LoginForm;