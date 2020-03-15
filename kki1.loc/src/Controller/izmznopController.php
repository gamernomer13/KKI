<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class izmznopController extends AbstractController
{
    /**
     * @Route("/lucky/number/izmznop2")
     */
    public function number(): Response
    {
        return $this->render('izmznop2.html.twig');
    }
}
